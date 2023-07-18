import React from "react";
import { StWrapper } from "./stRecruitMain";
import RecruitMainBanner from "./RecruitMainBanner";
import RecruitMainCategory from "./RecruitMainCategory";
import RecruitMainTechStack from "./RecruitMainTechStack";
import RecruitMainAnnouncement from "./RecruitMainAnnouncement";
import RecruitMainAnnouncementFilter from "./RecruitMainAnnouncementFilter";

const RecruitMain = () => {
  return (
    <StWrapper>
      <RecruitMainBanner />
      <RecruitMainCategory />
      <RecruitMainTechStack />
      <RecruitMainAnnouncementFilter />
      <RecruitMainAnnouncement />
    </StWrapper>
  );
};

export default RecruitMain;
