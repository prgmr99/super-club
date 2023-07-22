import React from "react";
import { StModalContent } from "./stModalContent";
import { IoClose } from "react-icons/io5";

const ModalContent = ({ onClose }) => {
  return (
    <StModalContent>
      <div className="modal">
        <button className="modal_btn_close" onClick={onClose}>
          <IoClose />
        </button>
        <div className="modal_box">
          <h2>로그인</h2>
          <img src="kakao_login_large_narrow.png" alt="카카오로그인버튼" />
        </div>
      </div>
    </StModalContent>
  );
};

export default ModalContent;