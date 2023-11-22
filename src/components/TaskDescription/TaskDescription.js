import React from "react";
import './TaskDescription.scss';
import {useDispatch, useSelector} from "react-redux";
import {getProjectItems} from "../../store/selectors";
import {setProjectItems} from "../../store/actions/projectAction";

const TaskDescription = () => {
    // const projectItems = useSelector(getProjectItems)
    // const dispatch = useDispatch()

    const backToProjectPage = () => {
        // dispatch(setProjectItems(projectItems))
        console.log('BackTo Project Page')

    }
    return(
        <div className="taskDescription">TaskDescription
            <button onClick={backToProjectPage}>Назад</button>
        </div>
    )
}

export default TaskDescription;
