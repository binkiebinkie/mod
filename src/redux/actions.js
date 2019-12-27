import { UPDATE_SELECTED_MODULE, ADD_MODULES } from "./actionTypes";

export const updateSelectedModule = id => ({
  type: UPDATE_SELECTED_MODULE,
  payload: { id }
});

export const addNewModules = arrayOfNewModules => ({
  type: ADD_MODULES,
  payload: { arrayOfNewModules }
});

// export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });
