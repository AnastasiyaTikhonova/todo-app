import React from "react";
import './TasksColumn.scss';
import {nanoid} from "nanoid";

const TasksColumn = ({children, titlesArr}) => {

    return(
        <div className="tasksColumn">
            <div className="columnTitle">{children}:</div>
            {
                titlesArr.map((title) => {
                    return <div className="taskTitle" key={nanoid()}>{title}</div>
                })
            }
        </div>
    )
}

export default TasksColumn;
