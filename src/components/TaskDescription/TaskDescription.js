import React from "react";
import './TaskDescription.scss';
import { useDispatch } from "react-redux";
import { getProjectPage } from "../../store/actions/taskAction";

const TaskDescription = () => {
     const dispatch = useDispatch()

    const backToProjectPage = () => {
        dispatch(getProjectPage())
    }

    return(
        <div className="taskDescription">TaskDescription
            <button onClick={backToProjectPage}>Назад</button>
        </div>
    )
}

export default TaskDescription;
