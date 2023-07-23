import React from "react";
import { StWrapper } from "./stRecruitMain";
import RecruitMainBanner from "./RecruitMainBanner";
import RecruitMainCategory from "./RecruitMainCategory";
import RecruitMainTechStack from "./RecruitMainTechStack";
import RecruitMainPosting from "./RecruitMainPosting";
import RecruitMainPostingFilter from "./RecruitMainPostingFilter";
import GlobalLayout from "../../global/GlobalLayout";

const RecruitMain = () => {
  return (
    <StWrapper>
      <RecruitMainBanner />
      <GlobalLayout>
        <RecruitMainCategory />
        <RecruitMainTechStack />
        <RecruitMainPostingFilter />
        <RecruitMainPosting />
      </GlobalLayout>
    </StWrapper>
  );
};

export default RecruitMain;
