import React, { useState } from 'react';
function CreateLog(props) {
    const subject = useFormInput('');
    const content = useFormInput('');
    const toUser = useFormInput('');
    const [error] = useState(null);

    // handle button click of login form
    const handleSend = async () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({"title":subject.value,"content":content.value,"toUser":{"username":toUser.value},"fromUser":{"username":sessionStorage.getItem('currentUser')}});

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:6969/sendMessage", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
        props.history.push('/dashboard');
    }

    return (
        <div>
            Write a message<br /><br />
            <div>
                To:<br />
                <input type="text" {...toUser}/>
            </div><div>
                Title<br />
                <input type="text" {...subject}/>
            </div>
            <div style={{ marginTop: 10 }}>
                Content<br />
                <input type="textarea" {...content} />
            </div>
            {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
            <input type="button" value={'Send'} onClick={handleSend} /><br />
        </div>
    );
}

const useFormInput = initialValue => {
    const [value, setValue] = useState(initialValue);

    const handleChange = e => {
        setValue(e.target.value);
    }
    return {
        value,
        onChange: handleChange
    }
}

export default CreateLog;