import React from "react";
import { styled } from "styled-components";

const ProjectAbout = () => {
  return (
    <AboutWrapper>
      <AboutContainer>
        <AboutTitle>프로젝트에 대해 소개해주세요.</AboutTitle>
        <AboutSub>
          프로젝트의 목적과 기능을 기반으로 간단하게 작성해주세요.
        </AboutSub>
        <AboutTextarea>
          <textarea
            maxLength="1500"
            placeholder="프로젝트에 대한 소개글을 10자 이상 작성해주세요."
            className="about-textarea"
          ></textarea>
        </AboutTextarea>
      </AboutContainer>
    </AboutWrapper>
  );
};

export default ProjectAbout;

const AboutWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const AboutTitle = styled.h1`
  margin-bottom: 1rem;
  font-weight: 800;
  font-size: 3rem;
  line-height: 150%;
`;

const AboutSub = styled.div`
  color: gray;
  white-space: pre-wrap;
  line-height: 200%;
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;

const AboutTextarea = styled.div`
  width: 750px;
  position: relative;
  .about-textarea {
    width: 100%;
    min-height: 300px;
    border-radius: 1rem;
    padding: 1.5rem;
    outline: none;
    font-size: 1.6rem;
    line-height: 160%;
  }
`;
