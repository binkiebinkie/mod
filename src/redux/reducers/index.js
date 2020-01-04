import { combineReducers } from "redux";
import modules from "./modules";
import tickets from "./tickets";

export default combineReducers({ modules, tickets });
