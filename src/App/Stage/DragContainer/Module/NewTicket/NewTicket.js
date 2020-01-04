import React, { useState, useEffect } from "react";
import NewTicketLayout from "./NewTicketLayout";
import NewTicketTitle from "./NewTicketTitle";

const NewTicket = ({ createTicket, moduleId }) => {
  const [title, updateTitle] = useState("");

  let inputTicket = React.createRef();
  useEffect(() => inputTicket.current.focus());

  // const updateValue = e => updateTitle(e.value);

  const validateTitle = enterWasPressed => {
    if (title.length > 0) createTicket(title, moduleId, enterWasPressed);
    else createTicket(null, moduleId, enterWasPressed);
  };

  return (
    <NewTicketLayout>
      <NewTicketTitle
        type="text"
        ref={inputTicket}
        placeholder="<Ticket Name>"
        onBlur={e => validateTitle(false)}
        onChange={e => updateTitle(e.target.value)}
        onKeyPress={e => {
          if (e.key === "Enter") validateTitle(true);
        }}
      />
    </NewTicketLayout>
  );
};

export default NewTicket;
