import store from "./store";

export const getModulesState = () => {
  console.log(store);
  return store.modules;
};
