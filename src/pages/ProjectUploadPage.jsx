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
  return (
    <UploadWrapper>
      {stepPage[step]}
      <ButtonContainer>
        <PrevButton>이전</PrevButton>
        <NextButton>다음</NextButton>
      </ButtonContainer>
    </UploadWrapper>
  );
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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  gap: 62rem;
`;

const PrevButton = styled.button`
  width: 60px;
  height: 25px;
`;
const NextButton = styled.button`
  width: 60px;
  height: 25px;
`;
