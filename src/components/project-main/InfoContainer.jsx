import React from "react";
import { styled } from "styled-components";
import { GrView } from "react-icons/gr";
import { StInfoContainer } from "./stInfoContainer";

const InfoContainer = (props) => {
  return (
    <StInfoContainer>
      <Info>
        <StInfoTitle>{props.title}</StInfoTitle>
        <StMinorInfo>
          <StIcon>{<GrView />}</StIcon>
          <StViews>{props.views}</StViews>
        </StMinorInfo>
      </Info>
      <StInfoDescription>{props.description}</StInfoDescription>
    </StInfoContainer>
  );
};

export default InfoContainer;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 240%;
`;
const StInfoTitle = styled.div`
  font-weight: 600;
  font-size: 1.8rem;
  display: flex;
  justify-content: flex-start;
`;

const StMinorInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

const StIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 0.1rem;
`;

const StViews = styled.div`
  display: flex;
  align-items: center;
`;

const StInfoDescription = styled.div`
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 150%;
  display: flex;
  justify-content: flex-start;
  text-align: left;
  margin: 0 auto;
`;
