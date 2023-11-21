import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ModuleList.css"
import { useSelector, useDispatch } from "react-redux";
import * as client from "./client";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
    setModules,
} from "./modulesReducer";
import { findModulesForCourse,createModule } from "./client";

function ModuleList() {
    const { courseId } = useParams();
    const handleDeleteModule = (moduleId) => {
        client.deleteModule(moduleId)
            .then((status) => {dispatch(deleteModule(moduleId));});
    };
    useEffect(() => {
        findModulesForCourse(courseId)
            .then((modules) =>
                dispatch(setModules(modules))
            );
    }, [courseId]);
    const handleAddModule = () => {
        createModule(courseId, module).then((module) => {
            dispatch(addModule(module));
        });
    };
    const handleUpdateModule = async () => {
        const status = await client.updateModule(module);
        dispatch(updateModule(module));
    };

    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);
    const dispatch = useDispatch();
    return (
        <div className="module-list">
            <div className="row mt-3 mb-3">
                <div className="col-8">
                    <input className="form-control"
                        value={module.name}
                        onChange={(e) =>
                            dispatch(setModule({ ...module, name: e.target.value }))
                        }/>
                </div>
                <div className="col">
                    <button className="btn btn-primary mb-2 w-10" onClick={handleAddModule}>Add</button>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-8">
                    <textarea className="form-control"
                              value={module.description}
                              onChange={(e) =>
                                  dispatch(setModule({ ...module, description: e.target.value }))
                              }/>
                </div>
                <div className="col">
                    <button className="btn btn-warning mb-2 w-5" onClick={() => handleUpdateModule(module._id)}>Update</button>
                </div>
                </div>

            <ul>
            {/*<li className="li-group-item">*/}
            {/*    <input*/}
            {/*        value={module.name}*/}
            {/*        onChange={(e) =>*/}
            {/*            dispatch(setModule({ ...module, name: e.target.value }))*/}
            {/*        }/>*/}
            {/*        <button className="btn btn-primary mb-2 w-10" onClick={handleAddModule}>Add</button>*/}
            {/*    </li>*/}
            {/*    <br/>*/}
            {/*    <li className="li-group-item">*/}
            {/*    <textarea style={{width: "470px"}}*/}
            {/*        value={module.description}*/}
            {/*        onChange={(e) =>*/}
            {/*            dispatch(setModule({ ...module, description: e.target.value }))*/}
            {/*        }/>*/}
            {/*    <button className="btn btn-warning mb-2 w-5" onClick={() => handleDeleteModule(module._id)}>Update</button>*/}
            {/*</li>*/}
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
                                    <button className="btn btn-info "
                                        onClick={() => dispatch(setModule(module))}>
                                        Edit
                                    </button>
                                    <button className="btn btn-success "
                                        onClick={() => handleDeleteModule(module._id)}>
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
