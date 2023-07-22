import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  MainPage,
  MyPage,
  ProjectDetailPage,
  Recruit,
  ProjectUploadPage,
  RecruitCreatePage,
} from "./pages";
import { NotFound, Header, Footer, Modal } from "./global";

function App() {
  return (
    <>
      <Router>
        <Modal />
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/project/upload" element={<ProjectUploadPage />} />
          <Route path="/project/detail" element={<ProjectDetailPage />} />
          <Route path="/recruit" element={<Recruit />} />
          <Route path="/recruit/create" element={<RecruitCreatePage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      {/* <Footer /> */}
    </>
  );
}

export default App;
