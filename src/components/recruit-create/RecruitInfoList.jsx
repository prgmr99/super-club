import React, { useState } from "react";
import { StDropWrap } from "./stRecruitInfoList";
import { StSelect } from "./stSelect";
import Date from "../../global/Date";
import Button from "../../global/Button";

const RecruitInfoList = ({ setStep, step }) => {
  console.log(step);
  const positionOption = [
    { value: "프론트엔드", label: "프론트엔드" },
    { value: "백엔드", label: "백엔드" },
    { value: "디자이너", label: "디자이너" },
  ];

  const durationOption = [
    { value: "기간미정", label: "기간미정" },
    { value: "1개월", label: "1개월" },
    { value: "2개월", label: "2개월" },
    { value: "3개월", label: "3개월" },
    { value: "4개월", label: "4개월" },
    { value: "5개월", label: "5개월" },
    { value: "6개월", label: "6개월" },
    { value: "장기", label: "장기" },
  ];

  const methodOption = [
    { value: "온라인", label: "온라인" },
    { value: "오프라인", label: "오프라인" },
  ];

  const skillOption = [
    { value: "JS", label: "JS" },
    { value: "TS", label: "TS" },
    { value: "React", label: "React" },
  ];

  return (
    <StDropWrap>
      <ul className="test">
        <li>
          <label>진행 방식 *</label>
          <StSelect
            className="react-select-container"
            classNamePrefix="react-select"
            options={methodOption}
            placeholder="온라인/오프라인"
          />
        </li>
        <li>
          <label>진행 기간 *</label>
          <StSelect
            className="react-select-container"
            classNamePrefix="react-select"
            options={durationOption}
            placeholder="기간미정 ~ 6개월 이상"
          />
        </li>
      </ul>
      <ul>
        <li>
          <label>모집 포지션 *</label>
          <StSelect
            className="react-select-container"
            classNamePrefix="react-select"
            options={positionOption}
            placeholder="프론트엔드/백엔드/디자이너"
          />
        </li>
        <li>
          <label>모집 마감일 *</label>
          <Date />
        </li>
      </ul>

      <ul className="skill">
        <li>
          <label>기술 스택 *</label>
          <StSelect
            className="react-select-container"
            classNamePrefix="react-select"
            options={skillOption}
            isMulti
            placeholder="프로젝트 사용 스택"
            noOptionsMessage={() => "옵션이 더 이상 없어요."}
          />
        </li>
      </ul>
      <ul>
        <li className="github">
          <label>GitHub ID</label>
          <input
            type="text"
            placeholder="Github ID를 작성하면 잔디를 보실 수 있습니다."
          />
        </li>
      </ul>
      <div className="button-box">
        <Button purpose="step" onClick={() => setStep(step - 1)}>
          이전
        </Button>
        <Button purpose="step" onClick={() => setStep(step + 1)}>
          다음
        </Button>
      </div>
    </StDropWrap>
  );
};

export default RecruitInfoList;
