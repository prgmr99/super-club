import React, { useState } from "react";
import { styled } from "styled-components";
import Date from "../../global/Date";
import Button from "../../global/Button";

const ProjectIntro = () => {
  const [ssum, setSsum] = useState(true);
  return (
    <IntroWrapper>
      <ul className="introduction">
        <li>
          <label>프로젝트 이름</label>
          <StInput type="text" placeholder="프로젝트 이름을 입력해주세요." />
        </li>
        <li>
          <label>썸네일 선택</label>
          <input type="file" placeholder="사진을 선택해주세요." />
        </li>
        <li>
          <div>
            <label>시작일</label>
            <>날짜</>
            <label>종료일</label>
            <>날짜</>
          </div>
        </li>
      </ul>
      <div className="button-box">
        <button>이전</button>
        <button>다음</button>
      </div>
    </IntroWrapper>
  );
};

export default ProjectIntro;

const IntroWrapper = styled.ul`
  width: 100%;
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 4.5rem;
    gap: 5rem;
    li {
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 1rem;

      div {
        display: flex;
        gap: 3rem;
      }

      label {
        color: #333;
        font-size: 3.5rem;
        font-weight: bold;
      }
    }
  }
`;

const StInput = styled.input`
  border: none;
  outline: gray solid 2px;
  border-radius: 1rem;
  width: 750px;
  height: 60px;
  padding-left: 1.1rem;
  font-weight: bold;
  font-size: 20px;
  margin-top: 10px;
`;
