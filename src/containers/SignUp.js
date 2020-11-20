import React, { useState } from 'react';
function SignUp(props) {
    const username = useFormInput('');
    const password = useFormInput('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    // handle button click of login form
    const handleSignUp = async () => {
        //props.history.push('/dashboard');
        //let response = await fetch; //Getting data
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({"username": username.value, "password": password.value});
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:6969/addUser", requestOptions)
            .then(response => {
                console.log(response)
                    props.history.push('/login')
            })
            .catch(error => console.log('error', error));
    }

    return (
        <div>
            Sign up<br /><br />
            <div>
                Username<br />
                <input type="text" {...username} autoComplete="new-password" />
            </div>
            <div style={{ marginTop: 10 }}>
                Password<br />
                <input type="password" {...password} autoComplete="new-password" />
            </div>
            {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
            <input type="button" value={loading ? 'Loading...' : 'Sign Up'} onClick={handleSignUp} disabled={loading} /><br />
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

export default SignUp;