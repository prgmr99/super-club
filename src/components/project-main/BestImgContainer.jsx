import React from "react";
import { useState } from "react";
import { styled } from "styled-components";
import { StBestImgContainer, StBestImg } from "./stBestImgContainer";
import { RiHeartLine, RiHeartFill } from "react-icons/ri";

const BestImgContainer = (props) => {
  const [heart, setHeart] = useState(true);
  const handleHeart = () => {
    setHeart((cur) => !cur);
  };
  return (
    <StBestImgContainer>
      <StBestImg src={props.src} alt="No Image" />
      <LikeBtn onClick={handleHeart}>
        {heart ? <RiHeartLine /> : <RiHeartFill />}
      </LikeBtn>
    </StBestImgContainer>
  );
};

export default BestImgContainer;

const LikeBtn = styled.button`
  position: absolute;
  display: block;
  border: none;
  outline: none;
  background-color: transparent;
  top: 3px;
  right: 0;
  font-size: 2.5rem;
  color: #ff5252;
`;
