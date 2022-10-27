import React, { useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/auth.context';
import { useState } from 'react';

const Register = () => {

    const {user, regWithEmailPass, updateUserOnRegistration} = useContext(AuthContext);

    const navigate = useNavigate();

    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const [passwordLengthError, setPasswordLengthError] = useState(false);
    const [emailAlreadyUsed, setEmailAlreadyUsed] = useState(false);

    const handleRegistrationWithEmailAndPassword = (e) =>{
        e.preventDefault();
        const getForm = e.target;
        const email = getForm.email.value;
        const name = getForm.name.value;
        const password = getForm.password.value;
        const photoUrl = getForm.photoUrl.value;

        if(password.length < 6){
            setPasswordLengthError(true);
        }else{
            setPasswordLengthError(false);
            regWithEmailPass(email, password)
            .then(res =>{
                setEmailAlreadyUsed(false);
                updateProfileOfUser(name, photoUrl);
                navigate(from, {replace: true});
            })
            .catch(err =>{
                setEmailAlreadyUsed(true);
            });
        }
    };

    const updateProfileOfUser = (name, photoUrl) =>{
        const profileInfo = {
            displayName: name,
            photoURL: photoUrl
        };
        updateUserOnRegistration(profileInfo)
        .then()
        .catch(err =>{
            console.error(err);
        });
    }

    return (
        <div className='register-wrapper'>
            <div className="inner-register">
                <div className="left-register">
                    {/* <img src="https://i.ibb.co/ZLN0hq2/Untitled-design-14.png" alt="Untitled-design-14" border="0">
                    <img src="https://i.ibb.co/0BNc1DV/Untitled-design-15.png" alt="Untitled-design-15" border="0"> */}
                    <h1>SIGN UP</h1>
                </div>
                <div className="right-register">
                    <div className="inner-right-register">
                        <div className="dont-have">
                            <p>Have account already? <Link to={'/login'}>Login</Link></p>
                        </div>
                        <h2>Be A student of iotAcademy</h2>
                        <p>Sign up for your account.</p>
                        <form className="register-form" onSubmit={handleRegistrationWithEmailAndPassword}>
                            <div className="form-group">
                                <label htmlFor="name">Full Name</label><br />
                                <input className='input-form' type="text" name="name" id="" placeholder='Your name' required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="photoUrl">PhotoUrl</label><br />
                                <input className='input-form' type="text" name="photoUrl" id="" placeholder='https://freeimage.host/' required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label><br />
                                <input className='input-form' type="email" name="email" id="" placeholder='name@email.com' required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label><br />
                                <input className='input-form' type="password" name="password" id="" placeholder='Enter password' required/>
                            </div>
                            <div className="form-group">
                                {
                                    passwordLengthError ? <p className='error-msg'>Password Must be at least 6 digits</p> : <></>
                                }
                                {
                                    emailAlreadyUsed ? <p className='error-msg'>This email has been already in use!</p> : <></>
                                }
                                <input className='submit-btn-register' type="submit" value="REGISTER" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;