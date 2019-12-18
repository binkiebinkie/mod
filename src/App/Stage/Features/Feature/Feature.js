import React, { useState, useEffect } from "react";
import FeatureLayout from "./FeatureLayout";

const Feature = ({ title }) => {
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

  return <FeatureLayout>{title}</FeatureLayout>;
};

// Feature.propTypes = {
//   authenticated: PropTypes.bool.isRequired,
// };

export default Feature;
