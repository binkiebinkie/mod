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
      const { newModuleInArray } = action.payload;
      return {
        ...state,
        modules: [...state.modules, ...newModuleInArray]
      };
    }
    case REPLACE_MODULE: {
      const { newModule } = action.payload;
      console.log(newModule);

      const replaceIndex = state.modules.indexOf(
        thisModule => thisModule.replaceWhenFetchingDone === true
      );
      console.log(replaceIndex);

      const newModules = [...state.modules];
      console.log(newModules[replaceIndex]);

      newModules[replaceIndex] = newModule;
      console.log(newModules);

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
