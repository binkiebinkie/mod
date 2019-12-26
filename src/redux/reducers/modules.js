import { UPDATE_SELECTED_MODULE } from "../actionTypes";

const initialState = {
  selectedModule: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_SELECTED_MODULE: {
      const { id } = action.payload;
      return {
        ...state,
        selectedModule: id
      };
    }
    // case TOGGLE_TODO: {
    //   const { id } = action.payload;
    //   return {
    //     ...state,
    //     byIds: {
    //       ...state.byIds,
    //       [id]: {
    //         ...state.byIds[id],
    //         completed: !state.byIds[id].completed
    //       }
    //     }
    //   };
    // }
    default:
      return state;
  }
}
