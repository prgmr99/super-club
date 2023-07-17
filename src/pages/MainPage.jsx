import React from "react";
import { GlobalLayout } from "../global";
import { BestProject, ProjectList } from "../components";
import { useLocation } from "react-router-dom";

const MainPage = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <GlobalLayout>
      <h1>Main</h1>
      <BestProject />
      <ProjectList />
    </GlobalLayout>
  );
};

export default MainPage;
