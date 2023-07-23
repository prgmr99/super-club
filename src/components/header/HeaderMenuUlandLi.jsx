import React, { useEffect, useState } from "react";
import { StHeaderMenuUl, StHeaderMenuLi } from "./stHeaderMenuUlandLi";
import HeaderMenuLink from "./HeaderMenuLink";
import HeaderMyDrop from "./HeaderMyDrop";
import LoginModal from "./LoginModal";

const SUPER_URL = "https://supercoding.net/Course/CourseIntro";

const HeaderMenuUlandLi = () => {
  const [openDrop, setOpenDrop] = useState(false);
  // console.log("openDrop :", openDrop);

  const [token, setToken] = useState(localStorage.getItem("token"));
  // console.log("token :", token);

  useEffect(() => {
    // console.log("useEffect");
    setToken(localStorage.getItem("token"));
  }, [token]);

  const handleLogout = () => {
    // console.log("로그아웃 눌러");
    localStorage.removeItem("token");
    setOpenDrop(false); // 로그아웃 후 드롭다운을 닫습니다.
  };

  return (
    <StHeaderMenuUl>
      <StHeaderMenuLi>
        <HeaderMenuLink to={SUPER_URL} message="슈퍼코딩" />
      </StHeaderMenuLi>
      <StHeaderMenuLi>
        <HeaderMenuLink to="/" message="프로젝트" />
      </StHeaderMenuLi>
      <StHeaderMenuLi>
        <HeaderMenuLink to="/recruit" message="모집 공고" />
      </StHeaderMenuLi>
      <StHeaderMenuLi>
        <HeaderMenuLink to="/project/upload" message="등록" />
      </StHeaderMenuLi>
      <StHeaderMenuLi
        onMouseOver={() => setOpenDrop(true)}
        onMouseOut={() => setOpenDrop(false)}
      >
        {/* <HeaderMenuLink message="MY" />
        {openDrop && <HeaderMyDrop />} */}
        <LoginModal />
        {/* {token ? (
          <HeaderMenuLink message="MY" />
        ) : (
          <LoginModal setToken={setToken} />
        )}
        {openDrop === false && token === "abc" ? (
          <HeaderMyDrop handleLogout={handleLogout} />
        ) : null} */}
      </StHeaderMenuLi>
    </StHeaderMenuUl>
  );
};

export default HeaderMenuUlandLi;
