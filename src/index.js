import React from "react";
import ReactDOM from "react-dom";
import RenderApp from "./App";

import Backend from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => (
  <Provider store={store}>
    <DndProvider backend={Backend}>
      <RenderApp />
    </DndProvider>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
