import React from 'react';
import './MasterComponentsCss.css';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const CheckOut = () => {
    const navigate = useNavigate();
    const product = useLoaderData();
    useEffect(() => {
        if(product.id === undefined){
            navigate('/courses');
        }
    }, []);
    const handleCheckOutForm = (e) =>{
        e.preventDefault();
        alert('Thanks For Purchase the course!')
        navigate('/');
    }
    return (
        <div className='checkout-wrapper'>
            <div className="inner-checkout">
                <div className="course-buy-detail">
                    <h3>Check Out</h3>
                    <div className="img-wrapper-buy">
                        <img src={product.courseThumb} alt="" />
                    </div>
                    <h2>Course Name: {product.courseName}</h2>
                    <p>Fill-up and purchase the course</p>
                </div>
                <form className='purchase-form' onSubmit={handleCheckOutForm}>
                    <div className="form-group-checkout">
                        <label htmlFor="name">Full Name</label>
                        <input type="text" className='text-input' name='name' placeholder='Your Full Name' />
                    </div>
                    <div className="form-group-checkout">
                        <label htmlFor="mobile">Mobile Number</label>
                        <input type="text" className='text-input' name='mobile' placeholder='Your Mobile Number' />
                    </div>
                    <div className="form-group-checkout">
                        <label htmlFor="email">Email</label>
                        <input type="email" className='text-input' name='email' placeholder='name@email.com' />
                    </div>
                    <div className="form-group-checkout">
                        <input type="submit" className='submit-btn' name='submit-btn' value="Purchase" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CheckOut;