import React from "react";
import { GlobalLayout } from "../global";
import { BestProject, ProjectList } from "../components";

const MainPage = () => {
  return (
    <GlobalLayout>
      <h1>Main</h1>
      <BestProject />
      <ProjectList />
    </GlobalLayout>
  );
};

export default MainPage;
