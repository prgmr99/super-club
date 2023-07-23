import React, { useState } from "react";
import { createPortal } from "react-dom";

import { StLogin } from "./stLoginModal";
import LoginContent from "../modal/LoginContent";

const LoginModal = ({ setToken }) => {
  const [showModal, setShowModal] = useState(false);
  const closeHandler = (e) => {
    if (showModal === true) {
      setShowModal(false);
      document.body.style.overflow = "unset";
    }
  };

  return (
    <StLogin>
      <div
        onClick={(e) => {
          setShowModal(true);
          document.body.style.overflow = "hidden";
        }}
      >
        로그인
      </div>
      {showModal &&
        createPortal(
          <>
            <div className="modal_bg" onClick={closeHandler} />
            <LoginContent
              className="login"
              onClose={(e) => {
                setShowModal(false);
                document.body.style.overflow = "unset";
              }}
              setToken={setToken}
            />
          </>,
          document.body
        )}
    </StLogin>
  );
};

export default LoginModal;
