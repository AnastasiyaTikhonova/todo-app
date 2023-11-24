import React from "react";
import { deleteProjectItem } from "../../store/actions/projectAction";
import { DeleteProject} from "../../icons/DeleteProject/DeleteProject";
import '../ProjectItem/ProjectItem.scss'
import {useDispatch} from "react-redux";
import {getTaskPage} from "../../store/actions/taskAction";
import TaskStorage from "../../helpers/TaskStorage/TaskStorage";

const ProjectItem = ({ projectTitle, id }) => {
    const dispatch = useDispatch()

    const deleteProject = () => {

        dispatch(deleteProjectItem(id))
    }

    const getTasks = () => {
        dispatch(getTaskPage(id))
    }

    return(
        <div className="projectItem" >
            <div className="projectItem__btn" onClick={deleteProject}>
                <DeleteProject />
            </div>
            <div className="projectItem__title" onClick={getTasks}>{projectTitle}</div>
        </div>
    )
}

export default ProjectItem;
