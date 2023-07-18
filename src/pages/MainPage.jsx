import React from "react";
import { styled } from "styled-components";
import { GlobalLayout } from "../global";
import { BestProject, ProjectList } from "../components";
import { useLocation } from "react-router-dom";

const MainPage = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <GlobalLayout>
      <h1>Main</h1>
      <BestProject />
      <ProjectList />
      <Button>Upload</Button>
    </GlobalLayout>
  );
};

const Button = styled.button`
  position: fixed;
  width: 100px;
  height: 50px;
  top: 43vw;
  left: 5vh;
`;

export default MainPage;
