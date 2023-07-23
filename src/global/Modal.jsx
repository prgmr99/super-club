import React, { useState } from "react";
import { createPortal } from "react-dom";
import ModalContent from "../components/modal/ModalContent";
import { StModal } from "./stModal";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  const closeHandler = () => {
    if (showModal === true) {
      setShowModal(false);
    }
  };
  console.log(showModal);

  return (
    <>
      <button
        onClick={(e) => {
          setShowModal(true);
          document.body.style.overflow = "hidden";
        }}
      >
        로그인1
      </button>
      {showModal &&
        createPortal(
          <>
            <div className="modal_bg" onClick={closeHandler} />
            <ModalContent
              className="login"
              onClose={() => setShowModal(false)}
            />
          </>,
          document.body
        )}
    </>
  );
};

export default Modal;
