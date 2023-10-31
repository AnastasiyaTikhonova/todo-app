import React, {useState} from "react";
import './AddProjectPanel.scss'

const AddProjectPanel = ({ projectNameField, addProject }) => {

    const getInputName = (e) => {
        projectNameField(e.target.value)
    }

    return(
        <div className="add-panel">
            <input className="add-panel__input" onChange={getInputName}/>
            <button className="add-panel__btn" onClick={addProject}>Добавить проект</button>
        </div>
    )
}

export default AddProjectPanel;
