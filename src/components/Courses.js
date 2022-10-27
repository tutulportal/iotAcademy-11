import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Courses = () => {

    const courses = useLoaderData();

    return (
        <div className='course-wrapper'>
            <div className="inner-courses">
                <div className="courses-sidebar">
                    <div className="inner-courses-sidebar">
                        {
                            courses.map(course => <div key={course.id} className="single-side-course">
                            <Link to={`/course-details/${course.id}`}>{course.courseName}</Link>
                        </div>)
                        }
                    </div>
                </div>
                <div className="courses-cards">
                    <h1>All Courses</h1>
                    <div className="inner-courses-cards">
                        {
                            courses.map(course => <div key={course.id} className="single-card">
                                <div className="img-wrapper">
                                    <img src={course.courseThumb} alt="" />
                                </div>
                                <h2>{course.courseName}</h2>
                                <Link to={`/course-details/${course.id}`}>Details</Link>
                            </div>)
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;