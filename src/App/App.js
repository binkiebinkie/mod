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
        id: "1.0",
        title: "Module",
        tasks: ["1.1 Task", "1.2 Story", "1.3 Task", "1.4 Task"],
        top: 400,
        left: 60
      },
      {
        id: "2.0",
        title: "Module",
        tasks: ["2.1 Task", "2.2 Story", "2.3 Task", "2.4 Task"],
        top: 40,
        left: 690
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
