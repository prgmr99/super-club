import React from "react";
import { StInfo } from "./stRecruitDetailInfo";

const RecruitDetailInfo = () => {
  const skill = ["React", "TS", "Recoil", "Java", "AWS", "Vue"];
  const getSkill = () => {
    return skill.map((el) => {
      return (
        <div key={el} className="skill-box_result ">
          {el}
        </div>
      );
    });
  };
  return (
    <StInfo>
      <ul>
        <li>
          <label>진행 방식</label>
          <div className="result">온라인</div>
        </li>
        <li>
          <label>진행 기간</label>
          <div className="result">6개월</div>
        </li>
      </ul>

      <ul>
        <li>
          <label>모집 포지션</label>
          <div className="result">프론트엔드, 백엔드</div>
        </li>
        <li>
          <label>모집 마감일</label>
          <div className="result">2023-07-22</div>
        </li>
      </ul>

      <ul>
        <li className="skill">
          <label>기술 스택</label>
          <div className="skill-box">{getSkill()}</div>
        </li>
      </ul>
    </StInfo>
  );
};

export default RecruitDetailInfo;
