import React, {useState} from "react";
import AddProjectPanel from "../AddProjectPanel";
import ProjectItem from "../ProjectItem";
import { getProjectItems } from "../../store/selectors";
import { addProjectItem } from "../../store/actions/projectAction";
import './ProjectList.scss'
import {useDispatch, useSelector} from "react-redux";

const ProjectList = () => {
    const projectItems = useSelector(getProjectItems)
    const [projectName, setProjectName] = useState('')
    const dispatch = useDispatch()

    const addProject = () => {
        const _prName = projectName.trim()

        if(_prName.length) {
            dispatch(addProjectItem(_prName))
            setProjectName('')
        }
    }

    return(
        <div className="projectList">
            <div className="container">
                <AddProjectPanel
                    projectNameField={setProjectName}
                    addProject={addProject}
                    value={projectName}
                />
                <div className="projectList__list">
                    {
                        projectItems.map((item) => {
                            return(
                                <ProjectItem
                                    key={item.id}
                                    projectTitle={item.projectTitle}
                                    id={item.id}
                                />
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default ProjectList;
