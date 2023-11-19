import React from "react";
import './TaskList.scss';
import MyButton from "../UI/Button";
import TasksColumn from "../TasksColumn";

const TaskList = () => {

    return(
        <div className="taskList">

            <div className="addPanel">
                <input className="searchInput"/>
                <MyButton>Поиск</MyButton>
                <div className="addTaskButton">
                    <MyButton>Добавить задачу</MyButton>
                </div>
            </div>

            <div className="vertical">
                <div className="vertical__body">
                        <TasksColumn/>
                        <TasksColumn/>
                        <TasksColumn/>
                </div>
            </div>

        </div>
    )
}

export default TaskList;