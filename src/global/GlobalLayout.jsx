import React from "react";
import { styled } from "styled-components";

const GlobalLayout = ({ children }) => {
  return <StGlobalContainer>{children}</StGlobalContainer>;
};

export default GlobalLayout;

const StGlobalContainer = styled.div`
  max-width: 1600px;
  width: 100%;
  margin: 0 auto;

  font-size: 24px;
  font-weight: bold;
`;
