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
  const { name, position, id, replaceWhenFetchingDone } = thisModule;
  // to be uncommented when API fixed
  // const { x, y } = position;

  // to be commented when API fixed
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

  // if the new ticket name added is valid, create new ticket
  const createTicket = async (title, parentModuleId, enterWasPressed) => {
    if (title.length <= 0) return stopEditingModule();

    // create random id until we find info from server lol
    const randomId = Math.random() * 1000;

    dispatchAddNewTickets([
      {
        id: randomId,
        parentId: 0,
        moduleId: parentModuleId,
        featureIds: [0],
        features: [],
        tagIds: [0],
        tags: [],
        subTickets: [null],
        ticketType: 0,
        description: "string",
        title,
        replaceWhenFetchingDone: true
      }
    ]);

    // If enter was pressed we wanna begin automatically creating a new Ticket
    if (enterWasPressed) {
      isEditingModule(isEditingModuleId);
    } else {
      // Otherwise, don't begin creating a new module
      stopEditingModule();
    }

    const url = `/api/Ticket`;
    const body = {
      title,
      description: null
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(body)
    };
    const ticketFromServer = await fetch(url, options)
      .then(resp => resp.json())
      .then(newTicket => newTicket);

    return dispatchReplaceTicket(ticketFromServer);
  };

  return (
    <ModuleLayout ref={drag} x={x} y={y}>
      <h4>{name}</h4>
      {stateTickets.map(ticket =>
        ticket.moduleId === id ? (
          <TicketLayout key={ticket.moduleId}>{ticket.title}</TicketLayout>
        ) : null
      )}
      {replaceWhenFetchingDone || isEditingModuleId === id ? (
        <NewTicket createTicket={createTicket} moduleId={id} />
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
    dispatchReplaceTicket: newTicket => dispatch(replaceTicket(newTicket))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Module);

/*
MEETING NOTES

Need server to return position if I send it
how do you recommend i get all modules / tickets on load
For each module do you plan on storing the id's of associated tickets? If so, this would be less expensive for me to implement mapping over the tickets on the front end


*/
