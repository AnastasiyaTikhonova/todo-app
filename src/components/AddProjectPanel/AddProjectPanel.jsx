import React from "react";
import './AddProjectPanel.scss'

const AddProjectPanel = ({ projectNameField, addProject, value }) => {
    const getInputName = (e) => {
        projectNameField(e.target.value)
    }

    return(
        <div className="add-panel">
            <input className="add-panel__input" onChange={getInputName} value={value}/>
            <button className="add-panel__btn" onClick={addProject}>Добавить проект</button>
        </div>
    )
}

export default AddProjectPanel;
