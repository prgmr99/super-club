import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage";
import ProjectDetailPage from "../pages/ProjectDetailPage";
import Recruit from "../pages/Recruit";

const ConfigRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/detail" element={<ProjectDetailPage />} />
        <Route path="/recruit" element={<Recruit />} />
      </Routes>
    </Router>
  );
};

export default ConfigRouter;
