import db from "../../Database";
import { useParams } from "react-router-dom";
import { AiFillFilter } from "react-icons/ai";
import { FaFileImport } from "react-icons/fa";
import { FaFileExport } from "react-icons/fa";
import { BsFillGearFill } from "react-icons/bs";
import "./index.css";
import React from 'react';

function Grades() {
    const { courseId } = useParams();
    const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
    const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);

    return (
        <div className="wd-grades-screen">
            <h1 className="title">Grades</h1>
            <div className="row">
                <div className="col d-flex justify-content-end">
                    <button className="import-btn"><FaFileImport /> Import</button>
                    <button className="export-btn"><FaFileExport /> Export</button>
                    <button className="settings-btn"><BsFillGearFill /></button>
                </div>
            </div>

            <div className="wd-search-bars">
                <div className="row">
                    <div className="col">
                        <h4>Student Names</h4>
                    </div>
                    <div className="col">
                        <h3>Assignment Names</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <input className="form-control" placeholder="Search Students" />
                    </div>
                    <div className="col">
                        <input className="form-control" placeholder="Search Assignments" />
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <button className="btn btn-secondary"><AiFillFilter /> Apply Filters</button>
                    </div>
                </div>
            </div>

            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>Student Name</th>
                        {assignments.map((assignment) => (
                            <th key={assignment._id}>{assignment.title}</th>
                        ))}
                    </tr>
                    </thead>

                    <tbody>
                    {enrollments.map((enrollment) => {
                        const user = db.users.find((user) => user._id === enrollment.user);
                        return (
                            <tr key={enrollment._id}>
                                <td>{user.firstName} {user.lastName}</td>
                                {assignments.map((assignment) => {
                                    const grade = db.grades.find(
                                        (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                                    return <td key={assignment._id}>{grade?.grade || ""}</td>;
                                })}
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Grades;
