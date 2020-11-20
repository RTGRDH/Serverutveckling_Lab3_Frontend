import React, { useState } from 'react';
function Login(props) {
    const username = useFormInput('');
    const password = useFormInput('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    // handle button click of login form
    const handleLogin = async () => {
        //props.history.push('/dashboard');
        //let response = await fetch; //Getting data
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        let raw = JSON.stringify({"username": username.value, "password": password.value});
        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        await fetch("http://localhost:6969/login", requestOptions)
            .then(response => {
                console.log(response)
                if(response.ok)
                {
                    sessionStorage.setItem('currentUser', ''+username.value+'');
                    props.history.push('/dashboard');
                }
                else
                {
                    alert("User not found.")
                }
            })
            .catch(error => console.log('error', error));
    }

    return (
        <div>
            Login<br /><br />
            <div>
                Username<br />
                <input type="text" {...username} autoComplete="new-password" />
            </div>
            <div style={{ marginTop: 10 }}>
                Password<br />
                <input type="password" {...password} autoComplete="new-password" />
            </div>
            {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
            <input type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} /><br />
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

export default Login;