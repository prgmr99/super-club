import React, { useState } from "react";
import { styled } from "styled-components";
import Button from "../../global/Button";

const ProjectAbout = ({ setStep, step }) => {
  const [saveValue, setSaveValue] = useState({
    description: "",
  });

  const onClickNext = () => {
    setStep(step + 1);
    // getItem 사용해서 기존의 값 불러오고 추가하는 식으로 구현하기.
    localStorage.setItem("save", JSON.stringify({ ...saveValue }));
  };
  return (
    <AboutWrapper>
      <AboutContainer>
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
        <div className="button-box">
          <Button purpose="step" onClick={() => setStep(step - 1)}>
            이전
          </Button>
          <Button purpose="step" onClick={onClickNext}>
            다음
          </Button>
        </div>
      </AboutContainer>
    </AboutWrapper>
  );
};

export default ProjectAbout;

const AboutWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
    height: 34rem;
    box-sizing: border-box;
    resize: none;
    padding: 1rem;
    outline: none;
    font-size: 1.8rem;
    font-weight: 800;
    border-radius: 12px;
    color: #333;
    border: 1px solid #ccc;
    &::placeholder {
      font-weight: 500;
      color: #8b8b8b;
      font-size: 1.6rem;
    }
    &:focus {
      border: 2px solid #2563eb;
    }
  }
`;

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  .button-box {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    margin-top: 20px;
  }
`;
