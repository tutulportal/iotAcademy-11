import React from 'react';
import './MasterComponentsCss.css';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Pdf from "react-to-pdf";

const ref = React.createRef();

const CourseDetails = () => {
    const navigate = useNavigate();
    const singleCourse = useLoaderData();
    useEffect(() => {
        if(singleCourse.id === undefined){
            navigate('/courses');
        }
    }, []);

    return (
        <div className='course-details-wrapper'>
            <div className="inner-course-details">
                <div className="contents-head">
                    <Pdf targetRef={ref} filename="about-course.pdf">
                        {({ toPdf }) => <button onClick={toPdf}>Print Course Details</button>}
                    </Pdf>
                    {/* <button>Print Course Details</button> */}
                </div>
                <div className="contents-body" ref={ref}>
                    <div className="img-wrapper-content">
                        <img src={singleCourse.courseThumb} alt="" />
                    </div>
                    <h2>{singleCourse.courseName}</h2>
                    <p>{singleCourse.description}</p>
                    <Link to={`/checkout/${singleCourse.id}`}>Get Premium Access</Link>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;