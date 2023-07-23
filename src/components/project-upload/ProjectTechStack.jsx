import React, { useState } from "react";
import { StDropWrap } from "../recruit-create/stRecruitInfoList";
import { StSelect } from "../recruit-create/stSelect";
import Button from "../../global/Button";

const ProjectTechStack = ({ setStep, step }) => {
  const skillOption = [
    { value: "JS", label: "JS", name: "skill", id: 1 },
    { value: "TS", label: "TS", name: "skill", id: 2 },
    { value: "React", label: "React", name: "skill", id: 3 },
  ];
  const [saveValue, setSaveValue] = useState({
    skill: [],
  });

  const onChangeSkill = (e) => {
    let skillArr = e.map((el) => el.id);

    setSaveValue({
      ...saveValue,
      skill: [...e],
    });
  };

  const onClickNext = () => {
    setStep(step + 1);

    localStorage.setItem("save", JSON.stringify(saveValue));
  };
  return (
    <StDropWrap>
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

export default ProjectTechStack;
