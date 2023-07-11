import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage";
import ProjectDetailPage from "../pages/ProjectDetailPage";
import Recruit from "../pages/Recruit";
import Header from "../global/Header";
import NotFound from "../global/NotFound";

const ConfigRouter = () => {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/detail" element={<ProjectDetailPage />} />
          <Route path="/recruit" element={<Recruit />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
};

export default ConfigRouter;
