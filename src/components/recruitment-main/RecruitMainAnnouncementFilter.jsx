import React from "react";
import { StAnnounceFilter } from "./stRecruitMainAnnouncementFilter";

const RecruitMainAnnouncementFilter = () => {
  return (
    <StAnnounceFilter>
      <ul>
        <li>최신순(기본)</li>
        <li>좋아요 순</li>
        <li>조회수 순</li>
      </ul>
      {/* <div>
        <label htmlFor="checkbox-recruiting">모집중만 보기</label>
        <input type="checkbox" id="checkbox-recruiting" />
      </div> */}
      <div className="wrapper">
        <input type="checkbox" id="switch" />
        <label for="switch" class="switch_label">
          <span className="">모집중만 보기</span>
          <span className="onf_btn"></span>
        </label>
      </div>
    </StAnnounceFilter>
  );
};

export default RecruitMainAnnouncementFilter;
