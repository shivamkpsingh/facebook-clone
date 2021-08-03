import React from 'react'
import './Login.css'
const Login = () => {
    return (
        <div className="login">
            <div className="login__container">
                <div className="login__input">
                    <input type="text" placeholder="Email address or phone number" />
                    <input type="password" placeholder="Password" />
                    <button>Log In</button>
                    <a href="#forgot">forgotten password?</a>
                </div>
                <button>create new account</button>
            </div>
        </div>
    )
}

export default Login
