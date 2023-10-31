import React, {useState} from "react";
import AddProjectPanel from "../AddProjectPanel";
import ProjectItem from "../ProjectItem";
import { getProjectItems } from "../../store/selectors";
import { addProjectItem } from "../../store/actions/projectAction";
import './ProjectList.scss'
import {useDispatch, useSelector} from "react-redux";
import { nanoid } from "nanoid";

const ProjectList = () => {
    const projectItems = useSelector(getProjectItems)
    const dispatch = useDispatch()
    const [projectName, setProjectName] = useState()

    const addProject = (name) => {
        setProjectName(name)
        console.log(projectName)
    }

    return(
        <div className="projectList">
            <div className="container">
                <AddProjectPanel projectNameField={addProject}/>
                <div className="projectList__list">
                    {
                        projectItems.map((item) => {
                            return(
                                <ProjectItem projectTitle={item.projectTitle} key={item.id} />
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default ProjectList;
