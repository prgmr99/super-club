import React from "react";
import { StConfirm } from "./stConfirm";
import Button from "./Button";

const Confirm = ({ setOpenConfirm, setStep }) => {
  const clickConfirm = () => {
    setOpenConfirm(false);
    setStep(1);
  };

  const clickCancel = () => {
    localStorage.removeItem("saveItem");
    setStep(1);
  };
  return (
    <StConfirm>
      <div className="text">전에 입력하셨던 내용들이 있습니다.</div>
      <div className="question">이어서 작성하시겠습니까??</div>
      <div className="btn-box">
        <Button purpose="register" onClick={clickConfirm}>
          확인
        </Button>
        <Button purpose="cancel" onClick={clickCancel}>
          취소
        </Button>
      </div>
    </StConfirm>
  );
};

export default Confirm;
