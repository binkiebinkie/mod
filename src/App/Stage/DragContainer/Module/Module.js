import React, { useState, useEffect } from "react";
import ModuleLayout from "./ModuleLayout";
import { connect } from "react-redux";
import { addNewTickets, replaceTicket } from "../../../../redux/actions";

import { useDrag } from "react-dnd";
import DNDTypes from "../../../../shared/DNDTypes";

import NewTicket from "./NewTicket";
import TicketLayout from "./TicketLayout";

const Module = ({
  thisModule,
  isEditingModuleId,
  isEditingModule,
  stateTickets,
  stopEditingModule,
  dispatchAddNewTickets,
  dispatchReplaceTicket
}) => {
  const [ticketTitle, updateTicketTitle] = useState("");
  // const [temporaryIdOfTicket, updateId] = useState(-1);

  const { name, position, id, replaceWhenFetchingDone } = thisModule;
  // console.log(thisModule);
  // to be uncommented when API fixed
  const { x, y } = position;

  const [{ isDragging }, drag] = useDrag({
    item: { id, x, y, type: DNDTypes.MODULE },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });
  if (isDragging) {
    return <div ref={drag} />;
  }

  // ticket validation is split into two parts
  // first, empty the ticket input
  // then we determine if we want to even create a new ticket
  // if so, make a ticket then an async call
  const ticketValidation = (title, parentModuleId, enterWasPressed) => {
    console.log(parentModuleId);
    updateTicketTitle("");
    if (title.length <= 0) return stopEditingModule();
    // If enter was pressed we wanna begin automatically creating a new Ticket
    if (enterWasPressed) {
      isEditingModule(isEditingModuleId);
    } else {
      // Otherwise, don't begin creating a new module
      stopEditingModule();
    }

    // create random id until we find info from server lol
    // we cant use object flag incase the user creates > 1 ticket before server responds
    // so just pass as parameter instead
    const temporaryIdOfTicket = Math.random() * 1000;
    dispatchAddNewTickets([
      {
        id: temporaryIdOfTicket,
        parentId: 0,
        moduleId: parentModuleId,
        featureIds: [0],
        features: [],
        tagIds: [0],
        tags: [],
        subTickets: [null],
        ticketType: 0,
        description: "string",
        title
      }
    ]);
    return createTicket(title, parentModuleId, temporaryIdOfTicket);
  };

  // if the new ticket name added is valid, create new ticket
  const createTicket = async (title, parentModuleId, temporaryIdOfTicket) => {
    const url = `/api/Ticket`;
    const body = JSON.stringify({
      title,
      description: null,
      moduleId: parentModuleId
    });

    console.log(body);

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body
    };
    const ticketFromServer = await fetch(url, options).then(resp =>
      resp.json()
    );

    console.log(ticketFromServer);

    return dispatchReplaceTicket(ticketFromServer, temporaryIdOfTicket);
  };

  console.log("ticketTitle", ticketTitle);

  return (
    <ModuleLayout ref={drag} x={x} y={y}>
      <h4>{name}</h4>
      {stateTickets.map(ticket =>
        ticket.moduleId === id ? (
          <TicketLayout key={ticket.moduleId}>{ticket.title}</TicketLayout>
        ) : null
      )}
      {replaceWhenFetchingDone || isEditingModuleId === id ? (
        <NewTicket
          ticketValidation={ticketValidation}
          moduleId={id}
          ticketTitle={ticketTitle}
          updateTicketTitle={updateTicketTitle}
        />
      ) : null}
    </ModuleLayout>
  );
};

const mapStateToProps = state => {
  return {
    stateTickets: state.tickets.tickets
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchAddNewTickets: newTicketsInArray =>
      dispatch(addNewTickets(newTicketsInArray)),
    dispatchReplaceTicket: (newTicket, temporaryIdOfTicket) =>
      dispatch(replaceTicket(newTicket, temporaryIdOfTicket))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Module);

/*
MEETING NOTES

putty ssh client

winscp upload files

*/
