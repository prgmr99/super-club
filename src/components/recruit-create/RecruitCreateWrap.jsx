import React, { useState, useEffect } from "react";
import RecruitCreateStepOne from "./RecruitCreateStepOne";
import RecruitCreateStepTwo from "./RecruitCreateStepTwo";
import { StWrap } from "./stRecruitCreateWrap";
import CreateIntro from "../CreateIntro";
import ProgressBar from "../../global/ProgressBar";

const RecruitCreateWrap = () => {
  const [step, setStep] = useState(0);

  const [recruitRequest, setRecruitRequest] = useState({
    progress: 0,
    position: [],
    endDate: "",
    skill: [],
    github: "",
    title: "",
    contents: "",
    duration: "",
  });

  const stepPage = {
    0: <CreateIntro setStep={setStep} step={step} />,
    1: (
      <RecruitCreateStepOne
        setStep={setStep}
        step={step}
        recruitRequest={recruitRequest}
        setRecruitRequest={setRecruitRequest}
      />
    ),
    2: (
      <RecruitCreateStepTwo
        setStep={setStep}
        step={step}
        recruitRequest={recruitRequest}
        setRecruitRequest={setRecruitRequest}
      />
    ),
  };

  return (
    <>
      <ProgressBar step={step} />
      <StWrap>{stepPage[step]}</StWrap>
    </>
  );
};

export default RecruitCreateWrap;
