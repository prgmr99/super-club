import React from "react";
import { styled } from "styled-components";
import { StBestContainer } from "./stBestContainer";
import { StBestBarContainer } from "./stBestBarContainer";
import { FcPrevious, FcNext } from "react-icons/fc";
import BestBar from "./BestBar";

const BestContainer = () => {
  return (
    <StBestContainer>
      <Title>프로JET Top 10</Title>

      <StBestBarContainer>
        <PrevBtn>{<FcPrevious />}</PrevBtn>
        <BestBar />
        <NextBtn>{<FcNext />}</NextBtn>
      </StBestBarContainer>
    </StBestContainer>
  );
};

export default BestContainer;

const Title = styled.div`
  width: 300px;
  height: 50px;
  border: 1px solid #eee;
  background-color: #1379ff;
  color: white;
  font-size: 3rem;
  margin-bottom: 6rem;
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PrevBtn = styled.div`
  left: 0;
  color: #6e93f7;
  transition: color 0.3s ease;
  font-size: 50px;
`;

const NextBtn = styled.div`
  right: 0;
  color: #6e93f7;
  transition: color 0.3s ease;
  font-size: 50px;
`;
