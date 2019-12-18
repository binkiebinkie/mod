import React, { useState, useEffect } from "react";

const SubTasks = () => {
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

  return <SubTasksLayout></SubTasksLayout>;
};

// SubTasks.propTypes = {
//   authenticated: PropTypes.bool.isRequired,
// };

export default SubTasks;
