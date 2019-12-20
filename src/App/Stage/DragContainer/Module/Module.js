import React, { useState, useEffect } from "react";
import ModuleLayout from "./ModuleLayout";

import { useDrag } from "react-dnd";
import DNDTypes from "../../../../shared/DNDTypes";

const Module = ({ thisModule }) => {
  const { top, left, id, tasks, title } = thisModule;
  // const [notes, setNotes] = useState([]);
  // const [loading, setLoading] = useState(true);
  const [{ isDragging }, drag] = useDrag({
    item: { id, left, top, type: DNDTypes.MODULE },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });
  if (isDragging) {
    return <div ref={drag} />;
  }

  return (
    <ModuleLayout ref={drag} top={top} left={left}>
      <h4>{title}</h4>
      {tasks.map(task => (
        <p>{task}</p>
      ))}
    </ModuleLayout>
  );
};

export default Module;
