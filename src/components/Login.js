import React from 'react';
import './MasterComponentsCss.css';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../contexts/auth.context';
import { useState } from 'react';

const Login = () => {

    const {loginWithGoogle, loginWithGithub, loginWithEmailPass} = useContext(AuthContext);
    const navigate = useNavigate();

    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const [emailFountError, setEmailFoundError] = useState(false);

    const handleLoginFrom = (e) =>{
        e.preventDefault();
        const getForm = e.target;
        const email = getForm.email.value;
        const password = getForm.password.value;
        loginWithEmailPass(email, password)
        .then(res => {
            console.log(res);
            setEmailFoundError(false);
            navigate(from, {replace: true});
        })
        .catch(err => {
            setEmailFoundError(true);
            console.log(err);
        })
    };

    const handleGoogleSignIn = () =>{
        loginWithGoogle()
        .then(res =>{
            navigate(from, {replace: true});
        })
        .catch(err =>{
            console.error(err);
        })
    };

    const handleGithubSignIn = () =>{
        loginWithGithub()
        .then(res =>{
            navigate(from, {replace: true});
        })
        .catch(err =>{
            console.error(err);
        })
    }


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
                        <form className="login-form" onSubmit={handleLoginFrom}>
                            <div className="form-group">
                                <label htmlFor="email">Email</label><br />
                                <input className='input-form' type="email" name="email" id="" placeholder='name@email.com' required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label><br />
                                <input className='input-form' type="password" name="password" id="" placeholder='enter password' required/>
                            </div>
                            <div className="form-group">
                                {
                                    emailFountError ? <p className='error-msg'>User Not Found, Please Enter Correct Information</p> : <></>
                                }
                                <input className='submit-btn-login' type="submit" value="LOGIN" />
                            </div>
                        </form>
                        <div className="social-login">
                            <p>-- OR --</p>
                            <button onClick={handleGoogleSignIn} className='google-login-btn'>Login With Google</button>
                            <button onClick={handleGithubSignIn} className='github-login-btn'>Login With Github</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;