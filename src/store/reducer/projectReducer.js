import { TYPES } from "../actionTypes";

const defaultState = {
    projectItems: [ {id: 1, projectTitle: "Проект номер 1"},
                    {id: 2, projectTitle: "Проект номер 2"},
                    {id: 3, projectTitle: "Проект номер 3"},
                    {id: 4, projectTitle: "Проект номер 4"}
    ]
}

export const projectReducer = (state = defaultState, { type, payload }) => {
    switch (type) {
        case TYPES.SET_PROJECT_ITEMS:
            return{
                ...state,
                projectItems: payload.items,
            }
        default:
            return state
    }
}
