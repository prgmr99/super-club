import React, { useState } from "react";
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

const RecruitInfoList = ({ setStep, step }) => {
  const dispatch = useDispatch();
  const recruit = useSelector((state) => state.recruit);
  console.log("recruit :", recruit);

  // data
  const [recruitRequest, setRecruitRequest] = useState({
    progress: 0,
    position: [],
    endDate: "",
    skill: [],
    github: "",
    title: "",
    contents: "",
  });

  //select는 key: { value: "", label: "" }
  const [saveValue, setSaveValue] = useState({
    progress: 0,
    position: [],
    endDate: "",
    skill: [],
    github: "",
    title: "",
    contents: "",
  });

  // console.log(recruitRequest);

  const onChangeProgress = (e) => {
    console.log(e);
    setRecruitRequest({ ...recruitRequest, progress: e.id });
    setSaveValue({ ...saveValue, progress: e });
  };

  const onChangeDuration = (e) => {
    const { name, id } = e;
    setRecruitRequest({ ...recruitRequest, [name]: id });
    setSaveValue({ ...saveValue, [name]: e });
  };

  const onChangePosition = (e) => {
    let idArr = e.map((el) => el.id);

    setRecruitRequest({
      ...recruitRequest,
      position: [...idArr],
    });

    setSaveValue({
      ...saveValue,
      position: [...e],
    });
  };

  const onChangeSkill = (e) => {
    let skillArr = e.map((el) => el.id);
    setRecruitRequest({
      ...recruitRequest,
      skill: [...skillArr],
    });

    setSaveValue({
      ...saveValue,
      skill: [...e],
    });
  };

  const onChangeGithub = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setRecruitRequest({
      ...recruitRequest,
      [name]: value,
    });

    setSaveValue({
      ...saveValue,
      github: e.target.value,
    });
  };

  const onClickNext = () => {
    setStep(step + 1);

    localStorage.setItem("save", JSON.stringify(saveValue));
  };

  // const save = JSON.parse(localStorage.getItem("save"));

  return (
    <StDropWrap>
      <ul className="test">
        {/* <li>
          <label>진행 방식 *</label>
          <StSelect
            className="react-select-container"
            classNamePrefix="react-select"
            options={methodOption}
            name="progress"
            placeholder="온라인/오프라인"
            // value={}
            onChange={onChangeProgress}
          />
        </li> */}
        {/* <li>
          <label>진행 기간 *</label>
          <StSelect
            className="react-select-container"
            classNamePrefix="react-select"
            options={durationOption}
            placeholder="기간미정 ~ 6개월 이상"
            // value={saveValue.duration}
            onChange={onChangeDuration}
          />
        </li> */}
      </ul>
      <ul>
        {/* <li>
          <label>모집 포지션 *</label>
          <StSelect
            className="react-select-container"
            classNamePrefix="react-select"
            options={positionOption}
            isMulti
            placeholder="프론트엔드/백엔드/디자이너"
            noOptionsMessage={() => "옵션이 더 이상 없어요."}
            onChange={onChangePosition}
            // value={saveValue.position}
          />
        </li> */}
        <li>
          <label>모집 마감일 *</label>
          <DatePick
          // recruitRequest={recruitRequest}
          // setRecruitRequest={setRecruitRequest}
          // saveValue={saveValue.endDate}
          // setSaveValue={setSaveValue}
          />
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
            // value={saveValue.skill}
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
            // value={saveValue.github}
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
