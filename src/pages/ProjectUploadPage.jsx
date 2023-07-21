import React from "react";
import { styled } from "styled-components";
import { useState } from "react";
import {
  ProjectAbout,
  ProjectCategory,
  ProjectIntro,
  ProjectTeam,
  ProjectTechStack,
} from "../components";

const ProjectUploadPage = () => {
  const [step, setStep] = useState(2);

  const stepPage = {
    1: <ProjectIntro />,
    2: <ProjectAbout />,
    3: <ProjectTechStack />,
    4: <ProjectTeam />,
    5: <ProjectCategory />,
  };
  return <UploadWrapper>{stepPage[step]}</UploadWrapper>;
};

export default ProjectUploadPage;

const UploadWrapper = styled.div`
  position: relative;
  top: 80px;
  width: 85%;
  height: 680px;
  margin: 0 auto;
  border: black;
`;
