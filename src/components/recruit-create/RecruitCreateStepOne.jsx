import React from "react";
import Quarter from "./../../global/Quarter";
import RecruitInfoList from "./RecruitInfoList";
import { StStepWrap } from "./stRecruitStep";
import { useSelector } from "react-redux";

const RecruitCreateStepOne = ({ setStep, step }) => {
  return (
    <StStepWrap>
      <h2>1. 모집공고의 기본 정보를 입력해주세요</h2>
      <Quarter />
      <div className="info">
        <RecruitInfoList setStep={setStep} step={step} />
      </div>
    </StStepWrap>
  );
};

export default RecruitCreateStepOne;
