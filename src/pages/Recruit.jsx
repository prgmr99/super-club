import React from "react";
import { useLocation } from "react-router-dom";

const Recruit = () => {
  const location = useLocation();
  console.log(location.pathname);
  return <h1>Recruit</h1>;
};

export default Recruit;
