import React from "react";
import { StHeaderMenuUl, StHeaderMenuLi } from "./stHeaderMenuUlandLi";
import HeaderMenuLink from "./HeaderMenuLink";

const SUPER_URL = "https://supercoding.net/Course/CourseIntro";

const HeaderMenuUlandLi = () => {
  return (
    <StHeaderMenuUl>
      <StHeaderMenuLi>
        <HeaderMenuLink to="/" message="메인 페이지" />
      </StHeaderMenuLi>
      <StHeaderMenuLi>
        <HeaderMenuLink to="/recruit" message="모집 페이지" />
      </StHeaderMenuLi>
      <StHeaderMenuLi>
        <HeaderMenuLink to={SUPER_URL} message="슈퍼코딩" />
      </StHeaderMenuLi>
      <StHeaderMenuLi>
        <HeaderMenuLink to="/my" message="MY" />
      </StHeaderMenuLi>
    </StHeaderMenuUl>
  );
};

export default HeaderMenuUlandLi;
