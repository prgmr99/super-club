import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { register } from "swiper/element/bundle";
import {
  ProjectMainPage,
  MyPage,
  ProjectDetailPage,
  RecruitMainPage,
  ProjectUploadPage,
  RecruitCreatePage,
  RecruitDetailPage,
  PostPage,
  LikePage,
} from "./pages";

import { NotFound, Header, Modal } from "./global";

register();

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
          <Route path="/mypost" element={<PostPage />} />
          <Route path="/mylikes" element={<LikePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
