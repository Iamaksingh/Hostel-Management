import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import './Login.modules.css'; // Import your CSS file
import loginImage from './login.jpg';


function LoginPage() {

    const [rollno, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    async function onSubmit(e) {
        e.preventDefault();

        try {
            await axios.post('https://localhost:3001/', {
                rollno, password
            }).then(result => {
                console.log(result.data.message)
                if (result.data.message === 'Success') {
                    console.log('Logined');
                    setEmail('');
                    setPassword('')
                    navigate('/dashboard');
                }
                else if (result.data.message === 'Wrong Email or Password') {
                    setEmail('');
                    setPassword('')
                    navigate('/');

                }
            });
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <div className="loginpage">
            <div className="image">
                <img src={loginImage} alt="authentication" height="450px" width="500px" />
            </div>
            <div className="login_credentials">
                <h1>Hostel Management</h1>
                <h3>Enter your login credentials</h3>
                <form action="POST">
                    <label htmlFor="first">Username:</label>
                    <input type="rollno" id="first" onChange={(e) => { setEmail(e.target.value) }} name="first" placeholder="Enter your Username" required />
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" onChange={(e) => { setPassword(e.target.value) }} name="password" placeholder="Enter your Password" required />
                    <div className="wrap">
                        <button type="submit" onClick={onSubmit}>Submit</button>
                    </div>
                </form>
                <p>Forgot Password?<a href="#" style={{ textDecoration: 'none' }}>reset your password</a></p>
            </div>
        </div>
    );
}

export default LoginPage;
