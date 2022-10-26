import React from 'react';
import './MasterComponentsCss.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='login-wrapper'>
            <div className="inner-login">
                <div className="left-login">
                    <h1>LOG IN</h1>
                </div>
                <div className="right-login">
                    <div className="inner-right-login">
                        <div className="dont-have">
                            <p>Don't have account? <Link to={'/register'}>Register</Link></p>
                        </div>
                        <h2>Welcome to iotAcademy</h2>
                        <p>Login to your account.</p>
                        <form className="login-form">
                            <div className="form-group">
                                <label htmlFor="email">Email</label><br />
                                <input className='input-form' type="email" name="email" id="" placeholder='name@email.com' required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label><br />
                                <input className='input-form' type="password" name="password" id="" placeholder='enter password' required/>
                            </div>
                            <div className="form-group">
                                <input className='submit-btn-login' type="submit" value="LOGIN" />
                            </div>
                        </form>
                        <div className="social-login">
                            <p>-- OR --</p>
                            <button className='google-login-btn'>Login With Google</button>
                            <button className='github-login-btn'>Login With Github</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;