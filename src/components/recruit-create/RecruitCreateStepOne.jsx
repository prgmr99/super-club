import React from "react";
import { StStepOne } from "./stRecruitCreateStepOne";
import Quarter from "./../../global/Quarter";
import RecruitInfoList from "./RecruitInfoList";

const RecruitCreateStepOne = ({ setStep, step }) => {
  return (
    <StStepOne>
      <h2>1. 모집공고의 기본 정보를 입력해주세요.</h2>
      <Quarter />
      <div className="info">
        <RecruitInfoList setStep={setStep} step={step} />
      </div>
    </StStepOne>
  );
};

export default RecruitCreateStepOne;
