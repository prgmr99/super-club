import React from "react";
import { StPosting } from "./stRecruitMainPosting";
import { register } from "swiper/element/bundle";
// register();

import RecruitMainPostingBox from "./RecruitMainPostingBox";
import { useNavigate } from "react-router-dom";

const RecruitMainPosting = () => {
  return (
    <StPosting>
      <RecruitMainPostingBox />
      <RecruitMainPostingBox />
      <RecruitMainPostingBox />
      <RecruitMainPostingBox />
      <RecruitMainPostingBox />
      <RecruitMainPostingBox />
      <RecruitMainPostingBox />
      <RecruitMainPostingBox />
      <RecruitMainPostingBox />
      <RecruitMainPostingBox />
      <RecruitMainPostingBox />
    </StPosting>
  );
};

export default RecruitMainPosting;
