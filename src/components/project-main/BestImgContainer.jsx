import React from "react";
import { StBestImgContainer, StBestImg } from "./stBestImgContainer";

const BestImgContainer = (props) => {
  return (
    <StBestImgContainer>
      <StBestImg src={props.src} alt="No Image" />
    </StBestImgContainer>
  );
};

export default BestImgContainer;
