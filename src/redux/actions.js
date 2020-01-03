import {
  UPDATE_SELECTED_MODULE,
  ADD_MODULES,
  REPLACE_MODULE
} from "./actionTypes";

export const updateSelectedModule = id => ({
  type: UPDATE_SELECTED_MODULE,
  payload: { id }
});

export const addNewModules = newModuleInArray => ({
  type: ADD_MODULES,
  payload: { newModuleInArray }
});

export const replaceModule = newModule => ({
  type: REPLACE_MODULE,
  payload: { newModule }
});

// export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });
