import React, { useState } from "react";
import { createPortal } from "react-dom";
import ModalContent from "../modal/ModalContent";
import { StLogin } from "./stLoginModal";

const LoginModal = ({ setToken }) => {
  const [showModal, setShowModal] = useState(false);
  const closeHandler = () => {
    if (showModal === true) {
      setShowModal(false);
    }
  };

  return (
    <StLogin>
      <div onClick={() => setShowModal(true)}>로그인</div>
      {showModal &&
        createPortal(
          <>
            <div className="modal_bg" onClick={closeHandler} />
            <ModalContent
              className="login"
              onClose={() => setShowModal(false)}
              setToken={setToken}
            />
          </>,
          document.body
        )}
    </StLogin>
  );
};

export default LoginModal;
