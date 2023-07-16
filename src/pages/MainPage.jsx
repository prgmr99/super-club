import React from "react";
import { GlobalLayout } from "../global";
import { BestProjectimport, ProjectList } from "../components";
// import BestProject from "components/BestProject";
// import ProjectList from "components/ProjectList";
// import GlobalLayout from "global/GlobalLayout";

const MainPage = () => {
  return (
    <GlobalLayout>
      <h1>Main</h1>
      <BestProjectimport />
      <ProjectList />
    </GlobalLayout>
  );
};

export default MainPage;
