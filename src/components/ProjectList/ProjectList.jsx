import React, {useState} from "react";
import AddProjectPanel from "../AddProjectPanel";
import ProjectItem from "../ProjectItem";
import { getProjectItems } from "../../store/selectors";
import './ProjectList.scss'
import {useSelector} from "react-redux";

const ProjectList = () => {
    const projectItems = useSelector(getProjectItems)
    const [projectName, setProjectName] = useState()

    console.log(projectName)

    return(
        <div className="projectList">
            <div className="container">
                <AddProjectPanel projectNameField={setProjectName}/>
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
