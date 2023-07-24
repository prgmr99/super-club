import React from "react";
import Quarter from "../../global/Quarter";
import { StStepWrap } from "./stUploadStep";
import ProjectCategory from "./ProjectCategory";

const UploadStepFour = ({ setStep, step }) => {
  return (
    <StStepWrap>
      <h2>4. 프로젝트의 카테고리를 선택해주세요.</h2>
      <Quarter />
      <div className="info">
        <ProjectCategory setStep={setStep} step={step} />
      </div>
    </StStepWrap>
  );
};

export default UploadStepFour;
