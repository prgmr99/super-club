import React from "react";
import BestProject from "../components/BestProject";
import ProjectList from "../components/ProjectList";
import Footer from "../components/Footer";
import GlobalLayout from "../global/GlobalLayout";

const MainPage = () => {
  return (
    <GlobalLayout>
      <h1>Main</h1>
      <BestProject />
      <ProjectList />
      <Footer />
    </GlobalLayout>
  );
};

export default MainPage;
