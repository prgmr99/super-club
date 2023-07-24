import React from "react";
import { StModalLogin } from "./stLoginContent";
import { IoClose } from "react-icons/io5";

const LoginContent = ({ onClose, setToken }) => {
  const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
  const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
  const KAKAO_AUTH_URI = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const tempToken = () => {
    window.location.href = KAKAO_AUTH_URI;
  };
  return (
    <StModalLogin>
      <div className="modal">
        <button className="modal_btn_close" onClick={onClose}>
          <IoClose />
        </button>
        <div className="modal_box">
          <h2>로그인</h2>
          <img
            src="kakao_login_large_narrow.png"
            alt="카카오로그인버튼"
            onClick={tempToken}
          />
        </div>
      </div>
    </StModalLogin>
  );
};

export default LoginContent;
