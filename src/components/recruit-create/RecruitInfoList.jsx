import React from "react";
import { StUlWrap } from "./stRecruitInfoList";
import DropTest from "./../../test";

const RecruitInfoList = () => {
  const positionOption = [
    { value: "프론트엔드", label: "프론트엔드" },
    { value: "백엔드", label: "백엔드" },
    { value: "디자이너", label: "디자이너" },
  ];

  return (
    <>
      <DropTest />
      {/* <StUlWrap className="test">
        <li>
          <label>진행 방식 *</label>
          <DropDown positionOption={positionOption} />
        </li>
        <li>
          <label>진행 기간 *</label>
          <DropDown test={test} />
        </li>
      </StUlWrap> */}
      {/* <StUlWrap>
        <li>
          <label>모집 포지션 *</label>
          <StDropDown/>
        </li>
        <li>
          <label>모집 마감일 *</label>
          <StDropDown>캘린더</StDropDown>
        </li>
      </StUlWrap>

      <StUlWrap className="skill">
        <li>
          <label>기술 스택 *</label>
          <StDropDown/>
        </li>
      </StUlWrap>
      <StUlWrap>
        <li>
          <label>GitHub ID</label>
          <div>input</div>
        </li>
      </StUlWrap> */}
    </>
  );
};

export default RecruitInfoList;
