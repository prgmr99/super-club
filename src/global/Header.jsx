import React from "react";
import { useLocation } from "react-router-dom";
import {
  StHeader,
  StBrand,
  StContainer,
  StImg,
  StLink,
  StMenuContainer,
  StMenuLi,
  StMenuNav,
  StMenuUl,
} from "./stHeader";

const Header = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <StHeader>
      <StContainer>
        <StBrand>
          <StLink to="/">
            <StImg src="https://supercoding.net/publishing/static/img/logo.svg"></StImg>
          </StLink>
        </StBrand>
        <StMenuContainer>
          <StMenuNav>
            <StMenuUl>
              <StMenuLi>
                <StLink to="/">메인 페이지</StLink>
              </StMenuLi>
              <StMenuLi>
                <StLink to="/recruit">모집 페이지</StLink>
              </StMenuLi>
              <StMenuLi>
                <StLink to="https://supercoding.net/Course/CourseIntro">
                  슈퍼코딩
                </StLink>
              </StMenuLi>
              <StMenuLi>
                <StLink to="/my">MY</StLink>
              </StMenuLi>
            </StMenuUl>
          </StMenuNav>
        </StMenuContainer>
      </StContainer>
    </StHeader>
  );
};

export default Header;
