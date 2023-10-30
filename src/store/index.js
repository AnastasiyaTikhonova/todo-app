import { legacy_createStore as createStore, combineReducers } from "redux";
import { projectReducer } from "./reducer/projectReducer";
import { taskReducer} from "./reducer/taskReducer";

export const store = createStore(combineReducers({projectReducer, taskReducer}))