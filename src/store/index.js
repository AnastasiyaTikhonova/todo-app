import { legacy_createStore as createStore, combineReducers, applyMiddleware} from "redux";
import { projectReducer } from "./reducer/projectReducer";
import { taskReducer} from "./reducer/taskReducer";
import thunk from "redux-thunk";

export const store = createStore(combineReducers({projectReducer, taskReducer}), applyMiddleware(thunk))