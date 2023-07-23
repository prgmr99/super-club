import React, { useState } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { StInput } from "./stInputFrom";
import { StTeamWrapper } from "./stTeamWrapper";
import Button from "../../global/Button";

const ProjectTeam = ({ setStep, step }) => {
  const navigate = useNavigate();
  const [saveValue, setSaveValue] = useState({
    teamName: "",
    teamMember: [],
    github: "",
    deployUrl: "",
  });
  const submitProject = () => {
    localStorage.setItem("save", JSON.stringify(saveValue));
    navigate("/");
  };
  return (
    <StTeamWrapper>
      <ul>
        <li>
          <div className="team-title">팀명</div>
          <StInput type="text" placeholder="팀명을 입력해주세요." />
        </li>
        <li>
          <div className="team-title">팀원</div>
          <StInput type="text" placeholder="팀원을 입력해주세요." />
        </li>
      </ul>
      <ul>
        <li>
          <div className="team-title">Github 주소</div>
          <StInput type="text" placeholder="Github 주소를 입력해주세요." />
        </li>
        <li>
          <div className="team-title">사이트 주소</div>
          <StInput
            type="text"
            placeholder="배포한 사이트 주소를 입력해주세요."
          />
        </li>
      </ul>
      <div className="button-box">
        <Button purpose="step" onClick={() => setStep(step - 1)}>
          이전
        </Button>
        <Button purpose="step" onClick={submitProject}>
          업로드
        </Button>
      </div>
    </StTeamWrapper>
  );
};

export default ProjectTeam;
