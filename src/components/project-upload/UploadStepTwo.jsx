import React from "react";
import Quarter from "../../global/Quarter";
import { StStepWrap } from "./stUploadStep";
import ProjectAbout from "./ProjectAbout";

const UploadStepTwo = ({ setStep, step }) => {
  return (
    <StStepWrap>
      <h2>2. 프로젝트에 대해 소개해주세요.</h2>
      <Quarter />
      <div className="info">
        <ProjectAbout setStep={setStep} step={step} />
      </div>
    </StStepWrap>
  );
};

export default UploadStepTwo;
