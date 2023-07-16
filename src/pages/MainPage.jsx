import React from "react";
import { GlobalLayout } from "../global";
import { BestProjectimport, ProjectList } from "../components";

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
