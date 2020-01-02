import React, { useEffect } from "react";
import { connect } from "react-redux";

import Stage from "./Stage";
import Sidebar from "./Sidebar";
import AppLayout from "./AppLayout";

import GlobalStyle from "../shared/styles/GlobalStyles";

import { addNewModules } from "../redux/actions";

const App = ({ dispatchAddNewModules }) => {
  // const [modules, updateModules] = useState([]);

  const getModules = async () => {
    // addNewModules()

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
    dispatchAddNewModules: arrayOfNewModules =>
      dispatch(addNewModules(arrayOfNewModules))
  };
};

export default connect(null, mapDispatchToProps)(App);
