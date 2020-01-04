import {
  UPDATE_SELECTED_MODULE,
  ADD_MODULES,
  REPLACE_MODULE,
  UPDATE_SELECTED_TICKET,
  ADD_TICKETS
} from "./actionTypes";

// MODULES
export const updateSelectedModule = id => ({
  type: UPDATE_SELECTED_MODULE,
  payload: { id }
});

export const addNewModules = newModulesInArray => ({
  type: ADD_MODULES,
  payload: { newModulesInArray }
});

export const replaceModule = newModule => ({
  type: REPLACE_MODULE,
  payload: { newModule }
});

// TICKETS
export const updateSelectedTicket = id => ({
  type: UPDATE_SELECTED_TICKET,
  payload: { id }
});

export const addNewTickets = newTicketsInArray => ({
  type: ADD_TICKETS,
  payload: { newTicketsInArray }
});
