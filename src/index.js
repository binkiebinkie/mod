import React from "react";
import ReactDOM from "react-dom";
import RenderApp from "./App";
import Backend from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

const App = () => (
  <DndProvider backend={Backend}>
    <RenderApp />
  </DndProvider>
);

ReactDOM.render(<App />, document.getElementById("root"));
