import React, { useState, useEffect } from "react";

import Stage from "./Stage";
import Sidebar from "./Sidebar";
import AppLayout from "./AppLayout";

import GlobalStyle from "../shared/styles/GlobalStyles";

const App = () => {
  // const onLoad = async () => {
  //   try {
  //     await Auth.currentSession();
  //     setAuthenticated(true);
  //   } catch (error) {
  //     if (error !== 'No current user') {
  //       console.error(error);
  //     }
  //   }
  //   setIsAuthenticating(false);
  // };
  // useEffect(() => {
  //   onLoad();
  // }, []);

  return (
    <AppLayout>
      <Stage />
      <Sidebar />
      <GlobalStyle />
    </AppLayout>
  );
};

export default App;
