import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  MainPage,
  MyPage,
  ProjectDetailPage,
  Recruit,
  RecruitCreatePage,
} from "./pages";
import { NotFound, Header, Footer } from "./global";
import { HeaderWrapper } from "./components";
import RecruitMain from "./components/recruitment-main/RecruitMain";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/project/detail" element={<ProjectDetailPage />} />
          <Route path="/recruit" element={<Recruit />} />
          <Route path="/recruit/create" element={<RecruitCreatePage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
