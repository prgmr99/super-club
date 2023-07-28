import React from "react";
import { StWrapper } from "./stRecruitMain";
import RecruitMainBanner from "./RecruitMainBanner";
import RecruitMainCategory from "./RecruitMainCategory";
import RecruitMainPosting from "./RecruitMainPosting";
import RecruitMainPostingFilter from "./RecruitMainPostingFilter";
import GlobalLayout from "../../global/GlobalLayout";
import Footer from "../../global/Footer";

const RecruitMain = () => {
  return (
    <>
      <StWrapper>
        <RecruitMainBanner />
        <GlobalLayout>
          <RecruitMainCategory />
          <RecruitMainPostingFilter />
          <RecruitMainPosting />
        </GlobalLayout>
      </StWrapper>
      <Footer />
    </>
  );
};

export default RecruitMain;
