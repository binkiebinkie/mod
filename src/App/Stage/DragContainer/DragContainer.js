import React, { useState, useEffect } from "react";

import { useDrop } from "react-dnd";
import DNDTypes from "../../../shared/DNDTypes";

import DragContainerLayout from "./DragContainerLayout";
import Module from "./Module";
import NewModule from "./NewModule";

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
  // related to Drag and Drop
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
    const currentModules = [...modules];
    const foundModule = currentModules.find(mod => mod.id === id);
    foundModule.left = left;
    foundModule.top = top;

    setModules([...currentModules]);
  };
  // for editing and adding an input
  const [newModule, isCreatingModule] = useState({ x: null, y: null });

  // create new module input
  const createModuleInput = e => {
    // on double click create an input to fill in
    isCreatingModule({
      x: e.clientX,
      y: e.clientY
    });
  };

  // once title is verified, actually create a module
  const createModule = (x, y, title) => {
    setModules([
      ...modules,
      {
        id: "2.0",
        title: "Module",
        tasks: [
          {
            task_title: "Story 1.1",
            subtasks: [
              {
                subtask_title: "Restore Old MySQL",
                isComplete: true
              }
            ]
          },
          "2.2 Story",
          "2.3 Task",
          "2.4 Task"
        ],
        top: 40,
        left: 690
      }
    ]);
  };

  return (
    <DragContainerLayout ref={drop} onDoubleClick={e => createModuleInput(e)}>
      {modules.map(thisModule => (
        <Module thisModule={thisModule} key={thisModule.id} />
      ))}
      {newModule.x && newModule.y ? (
        <NewModule
          x={newModule.x}
          y={newModule.y}
          createModule={createModule}
        />
      ) : null}
    </DragContainerLayout>
  );
};

export default DragContainer;
