import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
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
                        <form className="register-form">
                            <div className="form-group">
                                <label htmlFor="name">Full Name</label><br />
                                <input className='input-form' type="text" name="name" id="" placeholder='Your name' required />
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