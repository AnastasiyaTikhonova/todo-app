import React from "react";
import { deleteProjectItem } from "../../store/actions/projectAction";
import { DeleteProject} from "../../icons/DeleteProject/DeleteProject";
import '../ProjectItem/ProjectItem.scss'
import {useDispatch} from "react-redux";
import {getTasks} from "../../store/actions/taskAction";

const ProjectItem = ({ projectTitle, id }) => {
    const dispatch = useDispatch()

    const deleteProject = () => {
        dispatch(deleteProjectItem(id))
    }

    const getTaskPage = () => {
        dispatch(getTasks(id))
    }

    return(
        <div className="projectItem" >
            <div className="projectItem__btn" onClick={deleteProject}>
                <DeleteProject />
            </div>
            <div className="projectItem__title" onClick={getTaskPage}>{projectTitle}</div>
        </div>
    )
}

export default ProjectItem;
