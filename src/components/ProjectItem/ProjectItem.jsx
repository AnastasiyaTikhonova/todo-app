import React from "react";
import { deleteProjectItem } from "../../store/actions/projectAction";
import { DeleteProject} from "../../icons/DeleteProject/DeleteProject";
import '../ProjectItem/ProjectItem.scss'
import {useDispatch} from "react-redux";
import {getTaskPage} from "../../store/actions/taskAction";

const ProjectItem = ({ projectTitle, id }) => {
    const dispatch = useDispatch()

    const deleteProject = () => {
        dispatch(deleteProjectItem(id))
    }

    const getTasks = (itemId) => {
        dispatch(getTaskPage(itemId))
    }

    return(
        <div className="projectItem" >
            <div className="projectItem__btn" onClick={deleteProject}>
                <DeleteProject />
            </div>
            <div className="projectItem__title" onClick={() => getTasks(id)}>{projectTitle}</div>
        </div>
    )
}

export default ProjectItem;
