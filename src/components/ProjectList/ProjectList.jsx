import React from "react";
import AddProjectPanel from "../AddProjectPanel";
import ProjectItem from "../ProjectItem";
import { getProjectItems } from "../../store/selectors";
import './ProjectList.scss'
import {useSelector} from "react-redux";

const ProjectList = () => {
    const projectItems = useSelector(getProjectItems)

    return(
        <div className="projectList">
            <div className="container">
                <AddProjectPanel/>
                <div className="projectList__list">
                    {
                        projectItems.map((item) => {
                            return(
                                <ProjectItem projectTitle={item.projectTitle} />
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default ProjectList;
