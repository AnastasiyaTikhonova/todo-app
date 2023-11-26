import React from "react";
import './TaskList.scss';
import MyButton from "../UI/Button";
import TasksColumn from "../TasksColumn";

const TaskList = ({getModalWindow}) => {
    const tasks = [{title: 'jk,mfnhdjdlf', description: "wdbhrtjeiod", currStatus: 'queue',},
    {title: 'ffff', description: "whsrthtrbbsod", currStatus: 'development',},
    {title: 'jhhhhhh', description: "wbndtyrsiod", currStatus: 'done',},
    {title: 'jqqqqqqqf', description: "wadn gfbbvod", currStatus: 'development',},
    {title: 'vvvvvv', description: "d  fsbg", currStatus: 'done',},
    {title: 'jk,mfnhdjdlf', description: "wdbhrtjeiod", currStatus: 'done',},
]

    const queueArr = []
    const devArr = []
    const doneArr = []

    tasks.map((task) => {
        if (task.currStatus == 'queue'){
            queueArr.push(task.title)
        } else if(task.currStatus == 'development'){
            devArr.push(task.title)
        } else {
            doneArr.push(task.title)
        }
    })

    const getModal = () => {
        getModalWindow(true)
    }

    return(
        <div className="taskList">

            <div className="addPanel">
                <input className="searchInput"/>
                <MyButton>Поиск</MyButton>
                <div className="addTaskButton" onClick={getModal}>
                    <MyButton>Добавить задачу</MyButton>
                </div>
            </div>

            <div className="vertical">
                <div className="vertical__body">
                    <TasksColumn titlesArr={queueArr}>QUEUE</TasksColumn>
                    <TasksColumn titlesArr={devArr}>DEVELOPMENT</TasksColumn>
                    <TasksColumn titlesArr={doneArr}>DONE</TasksColumn>
                </div>
            </div>

        </div>
    )
}

export default TaskList;