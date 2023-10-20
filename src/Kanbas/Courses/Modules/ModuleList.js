import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "./ModuleList.css"
import {IoIosArrowDropdownCircle} from "react-icons/io";


function ModuleList() {
    const { courseId } = useParams();
    const modules = db.modules;

    return (
        <div className="module-list">
            {
                modules
                    .filter((module) => module.course === courseId)
                    .map((module, index) => (
                        <div key={index} className="module-item" style={{width: '600px'}}>
                            <li key={index} className="list-group-item">
                                <div key={index} className="module-item">
                                    <div className="module-icon">::</div>
                                    <div className="module-title">{module.name}</div>
                                    <div className="module-dropdown"><IoIosArrowDropdownCircle/></div>
                                    <div className="module-add">+</div>
                                    <div className="module-menu">:</div>
                                </div>
                                <p>{module.description}</p>
                            </li>
                        </div>



                    ))
            }
        </div>
    );
}

export default ModuleList;
