<!--
 All types of forms such as login, sign up, create a log and send message is using code from following link:
www.cluemediator.com/login-app-create-login-form-in-reactjs-using-secure-rest-api
 -->
import React, { useState } from 'react';
function Login(props) {
    const username = useFormInput('');
    const password = useFormInput('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    // handle button click of login form
    const handleLogin = async () => {
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        let raw = JSON.stringify({"username": username.value, "password": password.value});
        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:6969/login", requestOptions)
            .then(response => {
                console.log(response)
                if(response.ok)
                {
                    props.history.push('/dashboard');
                    sessionStorage.setItem('currentUser', ''+username.value+'');
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
            <input type="button" value={'Login'} onClick={handleLogin}/><br />
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