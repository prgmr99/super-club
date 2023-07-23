import React, { useState } from "react";
import { createPortal } from "react-dom";
import ModalLogin from "../components/modal/ModalLogin";
import { StModal } from "./stModal";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  const closeHandler = () => {
    if (showModal === true) {
      setShowModal(false);
    }
  };
  // console.log(showModal);

  return (
    <>
      <button onClick={() => setShowModal(true)}>로그인1</button>
      {showModal &&
        createPortal(
          <>
            <div className="modal_bg" onClick={closeHandler} />
            <ModalLogin className="login" onClose={() => setShowModal(false)} />
          </>,
          document.body
        )}
    </>
  );
};

export default Modal;
