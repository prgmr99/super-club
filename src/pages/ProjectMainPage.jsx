import React from "react";
import { styled } from "styled-components";
import { GlobalLayout } from "../global";
import { BestProject, ProjectList } from "../components";
import { useNavigate } from "react-router-dom";

const ProjectMainPage = () => {
  const navigate = useNavigate();
  const navigateToUpload = () => {
    navigate("/project/upload");
  };
  return (
    <GlobalLayout>
      <Div>
        <BestProject />
        <ProjectList />
      </Div>
      <div>
        <Button onClick={navigateToUpload}>Upload</Button>
      </div>
    </GlobalLayout>
  );
};

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

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
  font-size: 1.7rem;
  cursor: pointer;
`;

export default ProjectMainPage;
