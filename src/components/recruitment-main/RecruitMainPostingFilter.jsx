import React, { useState } from "react";
import { StPostingFilter } from "./stRecruitMainPostingFilter";

const RecruitMainPostingFilter = () => {
  const [recuiting, setRecuiting] = useState(false);

  const recuitingHandler = (e) => {
    e.target.checked ? setRecuiting(true) : setRecuiting(false);
  };

  return (
    <StPostingFilter>
      <ul>
        <li>최신순(기본)</li>
        <li>좋아요 순</li>
        <li>조회수 순</li>
      </ul>
      <div className="recruit_checking">
        <label htmlFor="checkbox-recruiting">모집중만 보기</label>
        <input
          type="checkbox"
          id="checkbox-recruiting"
          onClick={recuitingHandler}
        />
        {recuiting === true ? "모집중" : "전체"}
        {console.log(recuiting)}
        {/* {console.log(recuitingHandler)}
        {console.log(setRecuiting)} */}
      </div>
      {/* <div className="wrapper">
        <input type="checkbox" id="switch" />
        <label for="switch" class="switch_label">
          <span className="checkbox-recruiting">모집중만 보기</span>
          <span className="onf_btn"></span>
        </label>
      </div> */}
    </StPostingFilter>
  );
};

export default RecruitMainPostingFilter;
