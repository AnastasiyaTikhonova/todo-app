import React from "react";
import { DeleteProject} from "../../icons/DeleteProject/DeleteProject";
import '../ProjectItem/ProjectItem.scss'

const ProjectItem = ({ projectTitle}) => {

    return(
        <div className="projectItem" >
            <div className="projectItem__btn">
                <DeleteProject/>
            </div>
            <div className="projectItem__title">{projectTitle}</div>
        </div>
    )
}

export default ProjectItem;
