import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./ModuleList.css"
import { useSelector, useDispatch } from "react-redux";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
} from "./modulesReducer";


function ModuleList() {
    const { courseId } = useParams();
    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);
    const dispatch = useDispatch();
    return (
        <div className="module-list">
            <ul>
            <li className="li-group-item">
                <input
                    value={module.name}
                    onChange={(e) =>
                        dispatch(setModule({ ...module, name: e.target.value }))
                    }/>
                    <button className="bt" onClick={() =>dispatch(addModule({ ...module, course: courseId }))}>Add</button>
                </li>
                <li className="li-group-item">
                <textarea style={{width: "470px"}}
                    value={module.description}
                    onChange={(e) =>
                        dispatch(setModule({ ...module, description: e.target.value }))
                    }/>
                <button className="bt" onClick={() => dispatch(updateModule(module))}>Update</button>
            </li>
            </ul>
            {
                modules
                    .filter((module) => module.course === courseId)
                    .map((module, index) => (
                        <div key={index} className="module-item" style={{width: '600px', height:'150px'}}>
                            <li key={index} className="list-group-item">
                                <div key={index} className="module-item">
                                    <div className="module-icon">::</div>
                                    <div className="module-title"  >{module.name}</div>
                                    <button
                                        onClick={() => dispatch(setModule(module))}>
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => dispatch(deleteModule(module._id))}>
                                        Delete
                                    </button>
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
