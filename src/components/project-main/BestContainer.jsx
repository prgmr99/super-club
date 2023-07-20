import React from "react";
import { styled } from "styled-components";
import { StBestContainer } from "./stBestContainer";
import BestBar from "./BestBar";

const BestContainer = () => {
  return (
    <StBestContainer>
      <Title>프로JET Top 10</Title>
      <BestBar />
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
