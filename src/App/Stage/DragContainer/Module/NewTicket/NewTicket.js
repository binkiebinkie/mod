import React, { useState, useEffect } from "react";
import NewTicketLayout from "./NewTicketLayout";
import NewTicketTitle from "./NewTicketTitle";

const NewTicket = ({
  ticketTitle,
  updateTicketTitle,
  ticketValidation,
  moduleId
}) => {
  let inputTicket = React.createRef();
  useEffect(() => inputTicket.current.focus());

  const validateTitle = enterWasPressed =>
    ticketValidation(ticketTitle, moduleId, enterWasPressed);

  return (
    <NewTicketLayout>
      <NewTicketTitle
        type="text"
        ref={inputTicket}
        placeholder="<Ticket Name>"
        onBlur={e => validateTitle(false)}
        onChange={e => updateTicketTitle(e.target.value)}
        onKeyPress={e => {
          if (e.key === "Enter") validateTitle(true);
        }}
      />
    </NewTicketLayout>
  );
};

export default NewTicket;
