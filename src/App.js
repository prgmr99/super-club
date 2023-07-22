import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ProjectMainPage,
  MyPage,
  ProjectDetailPage,
  RecruitMainPage,
  ProjectUploadPage,
  RecruitCreatePage,
  RecruitDetailPage,
} from "./pages";

import { NotFound, Header, Modal } from "./global";

function App() {
  return (
    <>
      <Router>
        <Modal />
        <Header />
        <Routes>
          <Route path="/" element={<ProjectMainPage />} />
          <Route path="/project/upload" element={<ProjectUploadPage />} />
          <Route path="/project/detail" element={<ProjectDetailPage />} />
          <Route path="/recruit" element={<RecruitMainPage />} />
          <Route path="/recruit/create" element={<RecruitCreatePage />} />
          <Route path="/recruit/detail" element={<RecruitDetailPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
