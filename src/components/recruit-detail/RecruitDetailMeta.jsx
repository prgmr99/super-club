import React from "react";
import { StMeta } from "./stRecruitDetailMeta";
import Profile from "./../../global/Profile";

const RecruitDetailMeta = () => {
  return (
    <StMeta>
      <Profile location="recruit-detail" />
      <div className="meta-name">심채운</div>
      <div className="meta-detail">
        <div className="meta-detail_date">작성일 : 2023-07-22</div>
        <div className="meta-detail_view">조회수 : 4회</div>
      </div>
    </StMeta>
  );
};

export default RecruitDetailMeta;
