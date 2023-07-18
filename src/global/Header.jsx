import React from "react";
import styled from "styled-components";

const Header = () => {
  return <StHeader>헤더입니다.</StHeader>;
};

export default Header;

const StHeader = styled.header`
  height: 80px;
  width: 100%;
  text-align: center;
  border-bottom: 2px solid;
`;
