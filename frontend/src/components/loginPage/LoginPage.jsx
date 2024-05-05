import React from 'react';
import './Login.modules.css'; // Import your CSS file
import loginImage from './login.jpg'
function LoginPage() {
    return (
        <div className="loginpage">
            <div className="image">
                <img src={loginImage} alt="authentication" height="450px" width="500px" />
            </div>
            <div className="login_credentials">
                <h1>Hostel Management</h1>
                <h3>Enter your login credentials</h3>
                <form action="">
                    <label htmlFor="first">Username:</label>
                    <input type="text" id="first" name="first" placeholder="Enter your Username" required />
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" placeholder="Enter your Password" required />
                    <div className="wrap">
                        <button type="submit">Submit</button>
                    </div>
                </form>
                <p>Forgot Password?<a href="#" style={{textDecoration: 'none'}}>reset your password</a></p>
            </div>
        </div>
    );
}

export default LoginPage;
