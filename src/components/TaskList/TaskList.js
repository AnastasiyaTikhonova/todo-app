import React from "react";
import './TaskList.scss';

const TaskList = () => {
    return(
        <div className="taskList">
            <div className="addPanel">
                <input/>
                <button>
                    Поиск
                </button>
                <button>
                    Добавить задачу
                </button>
            </div>

        </div>
    )
}

export default TaskList;