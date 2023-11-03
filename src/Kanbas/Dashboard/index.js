// import CourseCard from "./CourseCard";
import db from "../Database";
import "./index.css";
import { React, useState } from "react";
import {FaEllipsisV, FaPencilAlt} from "react-icons/fa";
import {Link} from "react-router-dom";
import "./CourseCard.css"


function Dashboard(
    { courses, course, setCourse, addNewCourse,
        deleteCourse, updateCourse }
) {

    return (
        <div className="mx-xs-1 mx-md-2 mx-lg-3 flex-grow-1">
            <h1>Dashboard</h1>
            <hr />
            <div className="ms-md-3">
                <h2>Published Courses ({courses.length})</h2>
                <hr />
                <h5>Course</h5>
                <input value={course.name} className="form-control"
                       onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
                <input value={course.number} className="form-control"
                       onChange={(e) => setCourse({ ...course, number: e.target.value }) }/>
                <input value={course.startDate} className="form-control" type="date"
                       onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
                <input value={course.endDate} className="form-control" type="date"
                       onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
                <button onClick={addNewCourse} >
                    Add
                </button>
                <button onClick={updateCourse} >
                    Update
                </button>
                <div className="d-flex flex-row flex-wrap row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 justify-content-start" id="wd-course-cards-container">
                    {courses.map((course) => {
                        return (
                            <div className="col">
                                <div className="card shadow-sm">
                                    {/* Course image with button at upper right corner */}
                                    <div className="card-img-top wd-course-solid-blue wd-course-img-height-125px d-flex flex-row">
                                        <button type="button"
                                                className="btn position-absolute top-0 end-0 right-0 m-2 wd-course-card-img-button-white">
                                            <FaEllipsisV />
                                        </button>
                                    </div>
                                    {/* Course info; card body */}
                                    <div className="card-body d-flex flex-column">
                                        <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="mb-2 card-link wd-card-link-no-decoration">
                                            <div className="wd-course-card-header-content-container">
                                                <h6 className="card-title wd-ellipsis">
                                                    {course.name}
                                                </h6>
                                                <h5 className="card-subtitle mb-2 text-muted">{course.number}</h5>
                                                <p className="card-text wd-ellipsis">
                                                    {`start_date:${course.startDate}`} <br/>
                                                    {`end_date:${course.endDate}`}
                                                </p>
                                            </div>
                                        </Link>
                                        <Link key={course.number} to={"/Kanbas/Dashboard"} class="wd-course-card-icon-grey">
                                            <FaPencilAlt />
                                            <button
                                                onClick={(event) => {
                                                    event.preventDefault();
                                                    deleteCourse(course._id);
                                                }}>
                                                Delete
                                            </button>
                                            <button
                                                onClick={(event) => {
                                                    event.preventDefault();
                                                    setCourse(course);
                                                }}>
                                                Edit
                                            </button>

                                        </Link>
                                    </div>
                                </div>
                            </div>

                        )
                    }
                    )}
                </div>
            </div>

        </div>
    );
}
export default Dashboard;