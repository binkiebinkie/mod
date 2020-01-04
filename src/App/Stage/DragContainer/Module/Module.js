import React, { useState, useEffect } from "react";
import ModuleLayout from "./ModuleLayout";

import { useDrag } from "react-dnd";
import DNDTypes from "../../../../shared/DNDTypes";

const Module = ({ thisModule, isEditingModuleId }) => {
  // console.log(thisModule);
  const { name, position, id, edges } = thisModule;
  // to be uncommented when API fixed
  // const { x, y } = position;

  let x, y;
  if (position) {
    x = position.x;
    y = position.y;
  } else {
    x = 100;
    y = 100;
  }

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

/*
MEETING NOTES

Need server to return position if I send it
how do you recommend i get all modules / tickets on load

*/
