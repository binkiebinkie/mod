import React, { useState, useEffect } from "react";
import SidebarLayout from "./SidebarLayout";

const Sidebar = () => {
  // const [notes, setNotes] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const onLoad = async () => {
  //     if (!authenticated) {
  //       return;
  //     }

  //     try {
  //       const noteData = await loadNotes();
  //       setNotes(noteData);
  //     } catch (error) {
  //       console.error(error);
  //     }

  //     setLoading(false);
  //   };

  //   onLoad();
  // }, [authenticated]);

  return (
    <SidebarLayout>
      <h2>CLUSTER 1.0</h2>
      <h1>Story 1.1</h1>
    </SidebarLayout>
  );
};

// Sidebar.propTypes = {
//   authenticated: PropTypes.bool.isRequired,
// };

export default Sidebar;
