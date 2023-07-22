import React, { useState } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
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
    <TeamWrapper>
      <ul>
        <li>
          <Test>팀명</Test>
          <StInput type="text" placeholder="팀명을 입력해주세요." />
        </li>
        <li>
          <Test>팀원</Test>
          <StInput type="text" placeholder="팀원을 입력해주세요." />
        </li>
        <li>
          <Test>Github 주소</Test>
          <StInput type="text" placeholder="Github 주소를 입력해주세요." />
        </li>
        <li>
          <Test>사이트 주소</Test>
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
          다음
        </Button>
      </div>
    </TeamWrapper>
  );
};

export default ProjectTeam;
const TeamWrapper = styled.ul`
  max-width: 80%;
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 4.5rem;
    margin-left: 5rem;
    gap: 5rem;
    li {
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 1rem;
      margin-bottom: 20px;

      label {
        color: #333;
        font-weight: bold;
        .radioLabel {
          font-size: 2rem;
        }
      }

      div {
        display: flex;
        justify-content: space-between;
        gap: 3rem;
      }
    }
  }
  .button-box {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
const StInput = styled.input`
  border: none;
  outline: gray solid 2px;
  border-radius: 1rem;
  width: 400px;
  height: 40px;
  padding-left: 1.1rem;
  font-weight: bold;
  font-size: 20px;
  margin-top: 10px;
`;

const Test = styled.label`
  font-size: 2.6rem;
  font-weight: bold;
`;
