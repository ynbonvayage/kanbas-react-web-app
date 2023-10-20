import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css";
import {FaEdit, FaEllipsisV} from "react-icons/fa";
import { AiFillCheckCircle } from "react-icons/ai";
import {AiOutlinePlus} from "react-icons/ai";

function Assignments() {
    const { courseId } = useParams();
    const assignments = db.assignments;
    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === courseId);
    return (
        <div>
            <table class="wd-table-header">
                <tbody>
                <tr >
                    <td><input class="form-control" placeholder="Search for Assignments"></input></td>
                    <td style={{textAlign: 'right'}}>
                        <button class="btn btn-secondary float-end"><FaEllipsisV /></button>
                        <button class="btn btn-danger float-end"><AiOutlinePlus />Assignment</button>
                        <button class="btn btn-secondary float-end"><AiOutlinePlus />Group</button>
                    </td>
                </tr>
                </tbody>
            </table>
            <hr/>
            <div className="list-group wd-assignment-table">
                <h2>Assignments for course {courseId}
                    <FaEllipsisV className="float-end wd-assignment-header-ellipsis"/>
                    <AiOutlinePlus className="float-end" />
                    <span class="wd-total border border-secondary rounded-pill p-1 float-end">40% of Total</span>
                </h2>
                {courseAssignments.map((assignment) => (
                    <Link
                        key={assignment._id}
                        to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                        className="list-group-item">
                        <a href="edit.html">
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <FaEdit />
                                <h4 style={{ marginLeft: '10px' }}>{assignment.title}</h4>
                            </div>
                            <span style={{color: "red"}}>Multiple Models</span>
                            <FaEllipsisV className="wd-assignment-ellipsis float-end"/>
                            <AiFillCheckCircle className="wd-assignment-check float-end"/>

                        </a>
                    </Link>
                ))}
            </div>
        </div>
    );
}
export default Assignments;