import React, { useState, useEffect } from "react";

import { useDrop } from "react-dnd";
import DNDTypes from "../../../shared/DNDTypes";

import DragContainerLayout from "./DragContainerLayout";
import Module from "./Module";

const modulesData = [
  {
    id: "1.0",
    title: "Module",
    tasks: ["1.1 Task", "1.2 Story", "1.3 Task", "1.4 Task"],
    top: 400,
    left: 60
  },
  {
    id: "2.0",
    title: "Module",
    tasks: ["2.1 Task", "2.2 Story", "2.3 Task", "2.4 Task"],
    top: 40,
    left: 690
  }
];

const DragContainer = () => {
  // const [notes, setNotes] = useState([]);
  // const [loading, setLoading] = useState(true);

  const [modules, setModules] = useState(modulesData);
  const [, drop] = useDrop({
    accept: DNDTypes.MODULE,
    drop(item, monitor) {
      const delta = monitor.getDifferenceFromInitialOffset();
      const left = Math.round(item.left + delta.x);
      const top = Math.round(item.top + delta.y);
      moveModule(item.id, left, top);
      return undefined;
    }
  });
  const moveModule = (id, left, top) => {
    const currentState = [...modules];
    const foundModule = currentState.find(mod => mod.id === id);
    foundModule.left = left;
    foundModule.top = top;

    setModules([...currentState]);
  };

  return (
    <DragContainerLayout ref={drop}>
      {modules.map(thisModule => (
        <Module thisModule={thisModule} />
      ))}
    </DragContainerLayout>
  );
};

export default DragContainer;
