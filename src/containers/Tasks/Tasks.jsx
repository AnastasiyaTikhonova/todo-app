import React, {useState} from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TaskDescription from "../../components/TaskDescription";
import TaskList from "../../components/TaskList";
import './Tasks.scss';
import Modal from "../../components/Modal";

const Tasks = () => {
    const [modalActive, setModalActive] = useState(false)

    return(
        <div className="taskPage">
            <Header/>
            <div className="taskContainer">
                <div className="taskPage__row">
                    <TaskDescription/>
                    <TaskList getModalWindow={setModalActive}/>
                </div>

            </div>
            <Footer/>
            <Modal active={modalActive} setActive={setModalActive}>
                    <label htmlFor="title">Заголовок</label>
                    <input id="title" type="text"/>
                    <label htmlFor="description">Описание</label>
                    <textarea id="description" type="text"/>
                    <input id="priority" type="checkbox" value="yes"/>
                    <label id="priorityLabel">Важно</label>
                    <label>Файл к задаче</label>
                    <input type="file" accept="image/*,video/*"/>
                    <button id="addFileButton">Добавить</button>
                    <label className="currStatus">Текущий статус</label>
                    <select id="taskStatus" name="taskStatus">
                        <option value="Queue">Queue</option>
                        <option value="Development">Development</option>
                        <option value="Done">Done</option>
                    </select>
                    <button id="addSubTaskButton">Добавить подзадачу</button>
                <label htmlFor="comments">Комментарий</label>
                <textarea id="comments" type="text"/>

                <button className="addTuskButton">Добавить</button>
            </Modal>
        </div>
    )
}

export default Tasks;