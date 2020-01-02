import React, { useState, useEffect } from "react";
import ModuleLayout from "./ModuleLayout";

import { useDrag } from "react-dnd";
import DNDTypes from "../../../../shared/DNDTypes";

const Module = ({ thisModule }) => {
  console.log(thisModule);
  const { name, position, id, edges } = thisModule;
  const { x, y } = position;
  // const [notes, setNotes] = useState([]);
  // const [loading, setLoading] = useState(true);
  const [{ isDragging }, drag] = useDrag({
    item: { id, x, y, type: DNDTypes.MODULE },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });
  if (isDragging) {
    return <div ref={drag} />;
  }

  return (
    <ModuleLayout ref={drag} top={x} left={y}>
      <h4>{name}</h4>
      {edges && edges.map(edge => <p key={edge}>{edge}</p>)}
    </ModuleLayout>
  );
};

export default Module;
