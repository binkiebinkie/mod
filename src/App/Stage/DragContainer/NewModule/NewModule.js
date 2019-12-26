import React, { useState, useEffect } from "react";
import NewModuleLayout from "./NewModuleLayout";
import NewModuleTitle from "./NewModuleTitle";

import { useDrag } from "react-dnd";
import DNDTypes from "../../../../shared/DNDTypes";

const NewModule = ({ x, y, createModule }) => {
  const [text, updateText] = useState("");

  let inputModule = React.createRef();
  useEffect(() => inputModule.current.focus());

  const updateValue = e => updateText(e.value);

  const validateName = () => {
    console.log(text.length);
    if (text.length > 0) createModule(x, y, text);
    // else
  };

  return (
    <NewModuleLayout x={x} y={y}>
      <NewModuleTitle
        type="text"
        ref={inputModule}
        placeholder="<Module Name>"
        onBlur={e => validateName(e)}
        onChange={e => updateValue(e)}
        onKeyPress={e => {
          if (e.key === "Enter") validateName();
        }}
      />
    </NewModuleLayout>
  );
};

export default NewModule;
