import React from "react";
import { useLocation } from "react-router-dom";
import { RecruitMain } from "../components";

const Recruit = () => {
  const location = useLocation();
  return <RecruitMain>Recruit</RecruitMain>;
};

export default Recruit;
