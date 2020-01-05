import React, { useState } from "react";
import { connect } from "react-redux";
import { addNewModules, replaceModule } from "../../../redux/actions";

import { useDrop } from "react-dnd";
import DNDTypes from "../../../shared/DNDTypes";

import DragContainerLayout from "./DragContainerLayout";
import Module from "./Module";
import NewModule from "./NewModule";

const DragContainer = ({
  stateModules,
  dispatchAddNewModule,
  dispatchReplaceModule
}) => {
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

    dispatchAddNewModule([...currentModules]);
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

  // ADD TASKS TO EXISTING MODULE
  const [isEditingModuleId, isEditingModule] = useState("");

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
      regionId: null,
      position: { x, y }
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

    // create random id until we find info from server lol
    const randomId = Math.random() * 1000;

    // Update state to reflect new module added
    dispatchAddNewModule([
      {
        id: randomId,
        regionId: 0,
        name,
        description: "Please enter a description",
        position: { x, y },
        replaceWhenFetchingDone: true
      }
    ]);

    // begin adding tasks to module
    const moduleFromServer = await fetch(url, options)
      .then(resp => resp.json())
      .then(newModule => newModule);

    isEditingModule(moduleFromServer.id);
    return dispatchReplaceModule(moduleFromServer);
  };

  const stopEditingModule = () => isEditingModule("");

  return (
    <DragContainerLayout ref={drop} onDoubleClick={e => createModuleInput(e)}>
      {stateModules && stateModules.length > 0 ? (
        stateModules.map(thisModule => (
          <Module
            thisModule={thisModule}
            key={thisModule.id + 1 * Math.random()}
            isEditingModuleId={isEditingModuleId}
            isEditingModule={isEditingModule}
            stopEditingModule={stopEditingModule}
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
    dispatchAddNewModule: newModulesInArray =>
      dispatch(addNewModules(newModulesInArray)),
    dispatchReplaceModule: newModule => dispatch(replaceModule(newModule))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DragContainer);
