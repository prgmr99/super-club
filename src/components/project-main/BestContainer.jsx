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
  width: 100%;
  height: 50px;
  border: 1px solid #eee;
  //background-color: #1379ff;
  color: black;
  font-size: 3rem;
  margin-bottom: 1rem;
  margin-top: 4rem;
  padding-left: 8rem;
  box-sizing: border-box;
  display: flex;
  justify-content: start;
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
