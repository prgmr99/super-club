import React, { useState } from "react";
import { StPostingFilter } from "./stRecruitMainPostingFilter";

const RecruitMainPostingFilter = () => {
  const [recuiting, setRecuiting] = useState(false);

  const recuitingHandler = (e) => {
    e.target.checked ? setRecuiting(true) : setRecuiting(false);
    console.log(e);
  };

  return (
    <StPostingFilter>
      <ul>
        <li>최신순(기본)</li>
        <li>스크랩 순</li>
        <li>조회수 순</li>
      </ul>
      <div className="recruit_checking">
        <div className="recruit_checking_title">모집중만 보기</div>
        <div className="recruit_checking_switch">
          <input
            type="checkbox"
            id="checkbox-recruiting"
            hidden
            onClick={recuitingHandler}
          />
          {/* {recuiting === true ? "모집중" : "전체"} */}
          {recuiting === true ? "" : ""}
          {/* {console.log(recuiting)} */}
          <label htmlFor="checkbox-recruiting" className="switch_toggle">
            <span className="switch_toggle_btn"></span>
          </label>
        </div>
      </div>
    </StPostingFilter>
  );
};

export default RecruitMainPostingFilter;
