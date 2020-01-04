import {
  UPDATE_SELECTED_MODULE,
  ADD_MODULES,
  REPLACE_MODULE,
  REPLACE_TICKET,
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
export const replaceTicket = newTicket => ({
  type: REPLACE_TICKET,
  payload: { newTicket }
});

export const addNewTickets = newTicketsInArray => ({
  type: ADD_TICKETS,
  payload: { newTicketsInArray }
});
