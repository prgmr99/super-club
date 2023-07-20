import React from "react";
import { styled } from "styled-components";
import { GlobalLayout } from "../global";
import { BestProject, ProjectList } from "../components";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();
  const navigateToUpload = () => {
    navigate("/project/upload");
  };
  return (
    <GlobalLayout>
      <BestProject />
      <ProjectList />
      <div>
        <Button onClick={navigateToUpload}>Upload</Button>
      </div>
    </GlobalLayout>
  );
};

const Button = styled.button`
  position: fixed;
  width: 100px;
  height: 50px;
  top: 85%;
  left: 90%;
  background-color: #2c7dff;
  border: none;
  border-radius: 5rem;
  color: white;
  cursor: pointer;
`;

export default MainPage;
