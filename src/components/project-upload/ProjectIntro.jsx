import React, { useState } from "react";
import { styled } from "styled-components";

const ProjectIntro = () => {
  const [ssum, setSsum] = useState(true);
  return (
    <IntroWrapper>
      <IntroContainer>
        <div>
          <div>프로젝트 이름</div>
          <input type="text" placeholder="프로젝트 이름을 입력해주세요." />
        </div>
        <div>
          <div>썸네일 선택</div>
          <input type="file" placeholder="사진을 선택해주세요." />
        </div>
      </IntroContainer>
    </IntroWrapper>
  );
};

export default ProjectIntro;

const IntroWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;
