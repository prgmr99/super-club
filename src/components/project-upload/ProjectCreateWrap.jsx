import React, { useState } from "react";
import { styled } from "styled-components";
import ProgressBarMain from "../../global/ProgressBarMain";
import UploadStepOne from "./UploadStepOne";
import UploadStepTwo from "./UploadStepTwo";
import UploadStepThree from "./UploadStepThree";
import UploadStepFour from "./UploadStepFour";
import UploadStepFive from "./UploadStepFive";
import CreateIntro from "../CreateIntro";

const ProjectCreateWrap = () => {
  const [step, setStep] = useState(0);

  const stepPage = {
    0: <CreateIntro setStep={setStep} step={step} />,
    1: <UploadStepOne setStep={setStep} step={step} />,
    2: <UploadStepTwo setStep={setStep} step={step} />,
    3: <UploadStepThree setStep={setStep} step={step} />,
    4: <UploadStepFour setStep={setStep} step={step} />,
    5: <UploadStepFive setStep={setStep} step={step} />,
  };
  return (
    <>
      <ProgressBarMain step={step} />
      <UploadWrapper>{stepPage[step]}</UploadWrapper>
    </>
  );
};

export default ProjectCreateWrap;

const UploadWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
`;
