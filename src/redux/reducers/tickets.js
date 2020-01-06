import { REPLACE_TICKET, ADD_TICKETS } from "../actionTypes";

const initialState = {
  // selectedModule: null,
  tickets: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    // case UPDATE_SELECTED_MODULE: {
    //   const { id } = action.payload;
    //   return {
    //     ...state,
    //     selectedModule: id
    //   };
    // }
    case ADD_TICKETS: {
      const { newTicketsInArray } = action.payload;
      return {
        ...state,
        tickets: [...state.tickets, ...newTicketsInArray]
      };
    }
    case REPLACE_TICKET: {
      const { newTicket, temporaryIdOfTicket } = action.payload;
      console.log(newTicket);
      console.log(state.tickets);
      console.log("temporaryIdOfTicket", temporaryIdOfTicket);

      // find one to be replaced
      const replaceIndex = state.tickets
        .map(mod => mod.id === temporaryIdOfTicket)
        .indexOf(true);
      console.log(replaceIndex);

      const newTickets = [...state.tickets];
      console.log(newTickets[replaceIndex]);

      newTickets[replaceIndex] = newTicket;
      console.log(newTickets);

      return {
        ...state,
        tickets: [...newTickets]
      };
    }
    default:
      return state;
  }
}
