import React, { useState } from "react";
import { styled } from "styled-components";
import Button from "../../global/Button";
import { StAboutWrapper } from "./stProjectAbout";

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
    <StAboutWrapper>
      <div className="about-container">
        <div className="about-subtitle">
          프로젝트의 목적과 기능을 기반으로 간단하게 작성해주세요.
        </div>
        <div className="about-textarea">
          <textarea
            maxLength="1500"
            placeholder="프로젝트에 대한 소개글을 10자 이상 작성해주세요."
            className="textarea"
          ></textarea>
          <div className="current-number">0/1500</div>
        </div>
        <div className="button-box">
          <Button purpose="step" onClick={() => setStep(step - 1)}>
            이전
          </Button>
          <Button purpose="step" onClick={onClickNext}>
            다음
          </Button>
        </div>
      </div>
    </StAboutWrapper>
  );
};

export default ProjectAbout;
