import React, { useEffect } from "react";
import { connect } from "react-redux";

import Stage from "./Stage";
import Sidebar from "./Sidebar";
import AppLayout from "./AppLayout";

import GlobalStyle from "../shared/styles/GlobalStyles";

import { addNewModules } from "../redux/actions";

const App = ({ dispatchAddNewModules, dispatchAddNewTickets }) => {
  // const [modules, updateModules] = useState([]);

  const getModules = async () => {
    // addNewModules()

    dispatchAddNewTickets([
      {
        id: 0,
        parentId: 0,
        moduleId: 0,
        featureIds: [0],
        features: [
          {
            id: 0,
            name: "string",
            description: "string",
            gid: 0,
            createdAt: "2020-01-04T16:42:16.421Z",
            updatedAt: "2020-01-04T16:42:16.421Z"
          }
        ],
        tagIds: [0],
        tags: [
          {
            id: 0,
            name: "string",
            gid: 0,
            createdAt: "2020-01-04T16:42:16.421Z",
            updatedAt: "2020-01-04T16:42:16.421Z"
          }
        ],
        subTickets: [null],
        ticketType: 0,
        description: "string",
        title: "string",
        gid: 0,
        createdAt: "2020-01-04T16:42:16.421Z",
        updatedAt: "2020-01-04T16:42:16.421Z"
      }
    ]);

    return dispatchAddNewModules([
      {
        id: 0,
        regionId: 0,
        name: "string",
        description: "string",
        edges: [0],
        position: {
          x: 400,
          y: 60
        },
        gid: 0,
        createdAt: "2020-01-02T11:28:35.909Z",
        updatedAt: "2020-01-02T11:28:35.909Z"
      },
      {
        id: 1,
        regionId: 0,
        name: "string",
        description: "string",
        edges: [0],
        position: {
          x: 40,
          y: 690
        },
        gid: 1,
        createdAt: "2020-01-02T11:28:35.909Z",
        updatedAt: "2020-01-02T11:28:35.909Z"
      }
    ]);
  };

  useEffect(() => {
    getModules();
  }, []);

  return (
    <AppLayout>
      <Stage />
      <Sidebar />
      <GlobalStyle />
    </AppLayout>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchAddNewModules: newModulesInArray =>
      dispatch(addNewModules(newModulesInArray)),
    dispatchAddNewTickets: newTicketsInArray =>
      dispatch(addNewModules(newTicketsInArray))
  };
};

export default connect(null, mapDispatchToProps)(App);
