import React from "react";
import './TasksColumn.scss';
import {nanoid} from "nanoid";

const TasksColumn = () => {
    const taskArr = ['1 Task', '2 Task', '3 Task', '4 Task', '5 Task', '6 Task','6 Task','6 Task','6 Task','6 Task','6 Task','6 Task','6 Task','6 Task']

    return(
        <div className="tasksColumn">
            <div className="columnTitle">Title:</div>
            {
                taskArr.map((task) => {
                    return(
                        <div className="taskTitle" key={nanoid()}>{task}</div>
                    )
                })
            }
        </div>
    )
}

export default TasksColumn;
