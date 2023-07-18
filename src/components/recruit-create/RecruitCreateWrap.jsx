import React, { useState } from "react";
import RecruitCreateStepOne from "./RecruitCreateStepOne";
import RecruitCreateStepTwo from "./RecruitCreateStepTwo";
import { StWrap } from "./stRecruitCreateWrap";
import CreateIntro from "../CreateIntro";

const RecruitCreateWrap = () => {
  const [step, setStep] = useState(0);

  const stepPage = {
    0: <CreateIntro setStep={setStep} />,
    1: <RecruitCreateStepOne />,
    2: <RecruitCreateStepTwo />,
  };

  return <StWrap>{stepPage[step]}</StWrap>;
};

export default RecruitCreateWrap;
