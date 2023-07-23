import React, { useState, useEffect } from "react";
import { StDropWrap } from "./stRecruitInfoList";
import { StSelect } from "./stSelect";
import Button from "../../global/Button";
import {
  positionOption,
  durationOption,
  methodOption,
  skillOption,
} from "./data/recruitOption";
import { useDispatch, useSelector } from "react-redux";
import DatePick from "../../global/DatePick";
import { addRecruit } from "../../modules/recruit";

const RecruitInfoList = ({
  setStep,
  recruitRequest,
  setRecruitRequest,
  step,
}) => {
  // addRecruit
  const dispatch = useDispatch();
  const state = useSelector((state) => state.recruit);

  //select는 key: { value: "", label: "" }

  const onChangeProgress = (e) => {
    setRecruitRequest({ ...recruitRequest, progress: e });
  };

  const onChangeDuration = (e) => {
    const { name } = e;
    setRecruitRequest({ ...recruitRequest, [name]: e });
  };

  const onChangePosition = (e) => {
    setRecruitRequest({
      ...recruitRequest,
      position: [...e],
    });
  };

  const onChangeEndDate = (newDate) => {
    setRecruitRequest({
      ...recruitRequest,
      endDate: newDate,
    });
  };

  const onChangeSkill = (e) => {
    setRecruitRequest({
      ...recruitRequest,
      skill: [...e],
    });
  };

  const onChangeGithub = (e) => {
    const { name, value } = e.target;
    setRecruitRequest({
      ...recruitRequest,
      [name]: value,
    });
  };

  const onClickNext = () => {
    // console.log("버튼 눌림");
    localStorage.setItem("saveItem", JSON.stringify(recruitRequest));
    dispatch(addRecruit(recruitRequest));
    setStep(step + 1);
  };

  useEffect(() => {
    if (localStorage.getItem("saveItem") === null) {
      console.log("로컬 초기화 할게요");
      setRecruitRequest(state);
    }
  }, []);

  return (
    <StDropWrap>
      <ul>
        <li>
          <label>진행 방식 *</label>
          <StSelect
            className="react-select-container"
            classNamePrefix="react-select"
            options={methodOption}
            name="progress"
            placeholder="온라인/오프라인"
            value={recruitRequest.progress}
            onChange={onChangeProgress}
          />
        </li>
        <li>
          <label>진행 기간 *</label>
          <StSelect
            className="react-select-container"
            classNamePrefix="react-select"
            options={durationOption}
            name="duration"
            placeholder="기간미정 ~ 6개월 이상"
            value={recruitRequest.duration}
            onChange={onChangeDuration}
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
            isMulti
            placeholder="프론트엔드/백엔드/디자이너"
            noOptionsMessage={() => "옵션이 더 이상 없어요."}
            onChange={onChangePosition}
            value={recruitRequest.position}
          />
        </li>
        <li>
          <label>모집 마감일 *</label>
          <DatePick onChangeEndDate={onChangeEndDate} />
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
            onChange={onChangeSkill}
            value={recruitRequest.skill}
          />
        </li>
      </ul>
      <ul>
        <li className="github">
          <label>GitHub ID</label>
          <input
            type="text"
            placeholder="Github ID를 작성하면 잔디를 보실 수 있습니다."
            name="github"
            value={recruitRequest.github}
            onChange={onChangeGithub}
          />
        </li>
      </ul>
      <div className="button-box">
        <Button purpose="step" onClick={() => setStep(step - 1)}>
          이전
        </Button>
        <Button purpose="step" onClick={onClickNext}>
          다음
        </Button>
      </div>
    </StDropWrap>
  );
};

export default RecruitInfoList;
