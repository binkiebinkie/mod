import React, { useState } from "react";
import { connect } from "react-redux";
import { addNewModules } from "../../../redux/actions";

import { useDrop } from "react-dnd";
import DNDTypes from "../../../shared/DNDTypes";
import axios from "axios";

import DragContainerLayout from "./DragContainerLayout";
import Module from "./Module";
import NewModule from "./NewModule";

const DragContainer = ({ stateModules, dispatchAddNewModules }) => {
  // related to Drag and Drop
  // const [modules, setModules] = useState(modules);
  const [, drop] = useDrop({
    accept: DNDTypes.MODULE,
    drop(item, monitor) {
      const delta = monitor.getDifferenceFromInitialOffset();
      const x = Math.round(item.x + delta.x);
      const y = Math.round(item.y + delta.y);
      moveModule(item.id, x, y);
      return undefined;
    }
  });
  const moveModule = (id, x, y) => {
    const currentModules = [...stateModules];
    const foundModule = currentModules.find(mod => mod.id === id);
    foundModule.x = x;
    foundModule.y = y;

    dispatchAddNewModules([...currentModules]);
  };

  // CREATE NEW MODULE
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
  const createModule = async (x, y, name) => {
    if (!x || !y) {
      return isCreatingModule({
        x: null,
        y: null
      });
    }

    const url = `/api/Module`;
    const body = {
      name,
      description: null,
      regionId: null
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(body)
    };

    //stop creating a module
    isCreatingModule({ x: null, y: null });

    // Update state to reflect new module added
    dispatchAddNewModules([
      ...stateModules,
      {
        id: "awaiting-resp",
        regionId: 0,
        name: "string",
        description: "string"
      }
    ]);

    // begin adding tasks to module
    isEditingModule("awaiting-resp");

    await fetch(url, options)
      .then(resp => resp.json())
      .then(responseJson => {
        const currentModule = stateModules.indexOf(
          mod => mod.id === isEditingModuleId
        );

        dispatchAddNewModules([...stateModules, stateModules[currentModule]]);
        console.log("responseJson", responseJson);
        isEditingModule(responseJson.id);
      });
  };

  // ADD TASKS TO EXISTING MODULE
  const [isEditingModuleId, isEditingModule] = useState(null);

  return (
    <DragContainerLayout ref={drop} onDoubleClick={e => createModuleInput(e)}>
      {stateModules && stateModules.length > 0 ? (
        stateModules.map(thisModule => (
          <Module
            thisModule={thisModule}
            key={thisModule.id}
            isEditingModuleId={isEditingModuleId}
          />
        ))
      ) : (
        <p>loading</p>
      )}
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

const mapStateToProps = state => {
  return {
    stateModules: state.modules.modules
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchAddNewModules: arrayOfNewModules =>
      dispatch(addNewModules(arrayOfNewModules))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DragContainer);
