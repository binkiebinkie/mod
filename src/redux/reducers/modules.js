import {
  UPDATE_SELECTED_MODULE,
  ADD_MODULES,
  REPLACE_MODULE
} from "../actionTypes";

const initialState = {
  selectedModule: null,
  modules: []
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
    case ADD_MODULES: {
      const { newModulesInArray } = action.payload;
      return {
        ...state,
        modules: [...state.modules, ...newModulesInArray]
      };
    }
    case REPLACE_MODULE: {
      const { newModule } = action.payload;
      // find one to be replaced
      const replaceIndex = state.modules
        .map(mod => mod.replaceWhenFetchingDone)
        .indexOf(true);

      const newModules = [...state.modules];
      newModules[replaceIndex] = newModule;

      return {
        ...state,
        modules: [...newModules]
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
