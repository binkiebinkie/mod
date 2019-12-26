import { UPDATE_SELECTED_MODULE } from "./actionTypes";

export const updateSelectedModule = id => ({
  type: UPDATE_SELECTED_MODULE,
  payload: { id }
});

// export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });
