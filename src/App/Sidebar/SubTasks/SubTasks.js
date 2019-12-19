import React, { useState, useEffect } from "react";
import SubTasksLayout from "./SubTasksLayout";

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

  return (
    <SubTasksLayout>
      <h4>To Do (0/12)</h4>
      <ul>
        <li>Restore odl mysql</li>
        <li>Restore odl mysql</li>
        <li>Restore odl mysql</li>
      </ul>
      <p>+ Item</p>
    </SubTasksLayout>
  );
};

// SubTasks.propTypes = {
//   authenticated: PropTypes.bool.isRequired,
// };

export default SubTasks;
