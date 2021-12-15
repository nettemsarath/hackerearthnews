import React from "react";
import { useParams } from "react-router-dom";

const Publisher = () => {
  const { ID } = useParams();
  console.log("params params", ID);
  return <div>Publisher ... {ID} </div>;
};

export default Publisher;
