import React, { useState } from "react";
import { connect } from "react-redux";
import { addNewModules } from "../../../redux/actions";

import { useDrop } from "react-dnd";
import DNDTypes from "../../../shared/DNDTypes";
import axios from "axios";

import DragContainerLayout from "./DragContainerLayout";
import Module from "./Module";
import NewModule from "./NewModule";
import { serverUrl } from "../../../config";

const DragContainer = ({ stateModules, dispatchAddNewModules }) => {
  // related to Drag and Drop
  // const [modules, setModules] = useState(modules);
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
    const currentModules = [...stateModules];
    const foundModule = currentModules.find(mod => mod.id === id);
    foundModule.left = left;
    foundModule.top = top;

    dispatchAddNewModules([...currentModules]);
  };
  // for editing and adding an input
  const [newModule, isCreatingModule] = useState({ x: null, y: null });
  const [editingModule, isEditingModule] = useState({
    id: null,
    x: null,
    y: null,
    name: "",
    tickets: []
  });

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

    // const body = JSON.stringify(data);
    console.log(body);
    const options = {
      method: "POST",
      // mode: "no-cors",
      // crossDomain: true,

      headers: {
        // prettier-ignore
        // "Accept": "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(body)
    };
    console.log(url);
    console.log(options);

    //stop creating a module
    isCreatingModule({ x: null, y: null });
    // begin adding tasks to module
    isEditingModule({ id: null, x, y, name, tickets: [] });

    const response = await fetch(url, options)
      .then(resp => resp.json())
      .then(responseJson => {
        console.log("responseJson", responseJson);
      });

    console.log(response);
    console.log(response.data);
  };

  return (
    <DragContainerLayout ref={drop} onDoubleClick={e => createModuleInput(e)}>
      {stateModules && stateModules.length > 0 ? (
        stateModules.map(thisModule => (
          <Module thisModule={thisModule} key={thisModule.id} />
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
