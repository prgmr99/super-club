import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainPage, MyPage, ProjectDetailPage, Recruit } from "./pages";
import { NotFound, Header, Footer } from "./global";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/project/detail" element={<ProjectDetailPage />} />
          <Route path="/recruit" element={<Recruit />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      {/* <Footer /> */}
    </>
  );
}

export default App;
