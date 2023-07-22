import React, { useState } from "react";
import { StDropWrap } from "../recruit-create/stRecruitInfoList";
import { StSelect } from "../recruit-create/stSelect";
import Button from "../../global/Button";

const ProjectCategory = ({ setStep, step }) => {
  const categoryOption = [
    { value: "finTech", label: "핀테크", name: "category", id: 1 },
    { value: "entertain", label: "엔터테인먼트", name: "category", id: 2 },
    { value: "education", label: "교육", name: "category", id: 3 },
  ];
  const [saveValue, setSaveValue] = useState({
    category: [],
  });

  const onChangeCategory = (e) => {
    let categoryArr = e.map((el) => el.id);

    setSaveValue({
      ...saveValue,
      category: [...e],
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
          <label>카테고리 *</label>
          <StSelect
            className="react-select-container"
            classNamePrefix="react-select"
            options={categoryOption}
            isMulti
            placeholder="프로젝트 카테고리"
            noOptionsMessage={() => "옵션이 더 이상 없어요."}
            onChange={onChangeCategory}
            // value={saveValue.skill}
          />
        </li>
        <li>
          <label>카테고리 (선택)</label>
          <StSelect
            className="react-select-container"
            classNamePrefix="react-select"
            options={categoryOption}
            isMulti
            placeholder="프로젝트 카테고리"
            noOptionsMessage={() => "옵션이 더 이상 없어요."}
            onChange={onChangeCategory}
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

export default ProjectCategory;
