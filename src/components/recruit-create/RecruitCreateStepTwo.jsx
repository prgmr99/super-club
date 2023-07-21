import React from "react";
import Quarter from "../../global/Quarter";
import { StStepWrap } from "./stRecruitStep";
import RecruitIntroduce from "./RecruitIntroduce";

const RecruitCreateStepTwo = ({ step, setStep }) => {
  return (
    <StStepWrap>
      <h2>2. 프로젝트에 대해 소개해주세요</h2>
      <Quarter />
      <div className="info">
        <RecruitIntroduce setStep={setStep} step={step} />
      </div>
    </StStepWrap>
  );
};

export default RecruitCreateStepTwo;
