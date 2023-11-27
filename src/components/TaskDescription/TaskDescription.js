import React from "react";
import './TaskDescription.scss';
import { useDispatch } from "react-redux";
import { getProjectPage } from "../../store/actions/taskAction";
import { useNavigate } from "react-router-dom";

const TaskDescription = () => {
     const dispatch = useDispatch()
    const navigate = useNavigate()

    const backToProjectPage = () => {
        dispatch(getProjectPage())
        navigate('/')
    }

    return(
        <div className="taskDescription">TaskDescription
            <button onClick={backToProjectPage}>Назад</button>
        </div>
    )
}

export default TaskDescription;
