import React, { useState, useEffect } from "react";
import DescriptionLayout from "./DescriptionLayout";

const Description = () => {
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
    <DescriptionLayout>
      <h4>Description</h4>
      <p>As a database administrator i can do stuff and other things too</p>
    </DescriptionLayout>
  );
};

// Description.propTypes = {
//   authenticated: PropTypes.bool.isRequired,
// };

export default Description;
