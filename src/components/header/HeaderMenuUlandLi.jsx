import React, { useState } from "react";
import { StHeaderMenuUl, StHeaderMenuLi } from "./stHeaderMenuUlandLi";
import HeaderMenuLink from "./HeaderMenuLink";
import HeaderMyDrop from "./HeaderMyDrop";

const SUPER_URL = "https://supercoding.net/Course/CourseIntro";

const HeaderMenuUlandLi = () => {
  const [openDrop, setOpenDrop] = useState(false);
  // console.log(openDrop);

  return (
    <StHeaderMenuUl>
      <StHeaderMenuLi>
        <HeaderMenuLink to={SUPER_URL} message="슈퍼코딩" />
      </StHeaderMenuLi>
      <StHeaderMenuLi>
        <HeaderMenuLink to="/" message="메인 페이지" />
      </StHeaderMenuLi>
      <StHeaderMenuLi>
        <HeaderMenuLink to="/recruit" message="모집 페이지" />
      </StHeaderMenuLi>
      <StHeaderMenuLi>
        <HeaderMenuLink to="/project/upload" message="등록 페이지" />
      </StHeaderMenuLi>
      <StHeaderMenuLi
        onMouseEnter={() => setOpenDrop((prev) => !prev)}
        onMouseLeave={() => setOpenDrop((prev) => !prev)}
      >
        <HeaderMenuLink message="MY" />
        {openDrop && <HeaderMyDrop />}
      </StHeaderMenuLi>
    </StHeaderMenuUl>
  );
};

export default HeaderMenuUlandLi;
