import React from "react";
import './AddProjectPanel.scss'

const AddProjectPanel = () => {
    return(
        <div className="add-panel">
            <input className="add-panel__input"/>
            <button className="add-panel__btn">Добавить проект</button>
        </div>
    )
}

export default AddProjectPanel;