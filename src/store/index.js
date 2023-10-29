import { legacy_createStore as createStore } from "redux";
import { projectReducer } from "./reducer/projectReducer";

export const store = createStore(projectReducer)