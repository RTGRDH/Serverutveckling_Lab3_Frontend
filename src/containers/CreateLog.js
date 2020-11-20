import React, { useState } from 'react';
function CreateLog(props) {
    const subject = useFormInput('');
    const content = useFormInput('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    // handle button click of login form
    const handleCreate = async () => {
        var requestOptions = {
            method: 'POST',
            redirect: 'follow'
        };
        let url = "http://localhost:6969/createLog?title=" + subject.value +"&content="+ content.value + "&currentUser=" + sessionStorage.getItem('currentUser');
        fetch(url, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
        props.history.push('/dashboard');
    }

    return (
        <div>
            Create a log<br /><br />
            <div>
                Title<br />
                <input type="text" {...subject}/>
            </div>
            <div style={{ marginTop: 10 }}>
                Content<br />
                <input type="textarea" {...content} />
            </div>
            {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
            <input type="button" value={'Create'} onClick={handleCreate} /><br />
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