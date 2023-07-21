import React from "react";
import { StWraper } from "./stRecruitDetailWrap";
import RecruitDetailHeader from "./RecruitDetailHeader";
import RecruitDetailMeta from "./RecruitDetailMeta";
import RecruitDetailGithub from "./RecruitDetailGithub";

const RecruitDetailWrap = () => {
  return (
    <StWraper>
      <RecruitDetailHeader />
      <RecruitDetailMeta />
      <RecruitDetailGithub />
    </StWraper>
  );
};

export default RecruitDetailWrap;

// 헤더 유저프로필,이름,작성일,조회수 깃허브 잔디
