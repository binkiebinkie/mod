import { UPDATE_SELECTED_TICKET, ADD_TICKETS } from "../actionTypes";

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
    // case ADD_MODULES: {
    //   const { newModuleInArray } = action.payload;
    //   return {
    //     ...state,
    //     modules: [...state.modules, ...newModuleInArray]
    //   };
    // }
    // case REPLACE_MODULE: {
    //   const { newModule } = action.payload;
    //   console.log(newModule);
    //   console.log(state.modules);

    //   // const replaceIndex = state.modules.indexOf(thisModule => {
    //   //   console.log(thisModule);
    //   //   return thisModule.replaceWhenFetchingDone === true;
    //   // });

    //   // find one to be replaced
    //   const replaceIndex = state.modules
    //     .map(mod => mod.replaceWhenFetchingDone)
    //     .indexOf(true);
    //   console.log(replaceIndex);

    //   const newModules = [...state.modules];
    //   console.log(newModules[replaceIndex]);

    //   newModules[replaceIndex] = newModule;
    //   console.log(newModules);

    //   return {
    //     ...state,
    //     modules: [...newModules]
    //   };
    // }
    default:
      return state;
  }
}
