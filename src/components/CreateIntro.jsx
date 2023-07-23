import React, { useState, useEffect } from "react";
import { StIntro } from "./stCreateIntro";
import Button from "../global/Button";
import Confirm from "./../global/Confirm";

const CreateIntro = ({ setStep }) => {
  const [openConfirm, setOpenConfirm] = useState(false);
  // console.log(openConfirm);

  const recruitIntro = [
    {
      id: 1,
      label: "모집 공고의 기본 정보를 입력해주세요.",
      text: `모집할 인원, 기술 스택, 포지션, 마감일, 진행 기간, \n 진행 방식 등을 알려주세요.`,
      subText: "참고로 GitHub ID도 입력해주시면 잔디를 볼 수 있습니다.",
      // labelNumber: url,
    },
    {
      id: 2,
      label: "프로젝트에 대해 소개해주세요.",
      text: `진행하실 프로젝트의 제목과 기획을 작성해주세요.`,
      subText: "바로 등록하지 않아도 기존 작성 내용이 임시로 저장됩니다.",
    },
  ];

  // 프로젝트 인지 공고인지 나누는 함수. 추후 매개변수 추가
  const divideRecruit = () => {
    return recruitIntro.map((desc) => (
      <div className="intro_desc_order_item" key={desc.id}>
        <label>
          {desc.id}. {desc.label}
        </label>
        <div className="intro_desc_order_item-desc">{desc.text}</div>
        <div className="intro_desc_order_item-sub">{desc.subText}</div>
      </div>
    ));
  };

  const goNextStep = () => {
    const savedData = localStorage.getItem("saveItem");
    if (savedData) {
      setOpenConfirm(true);
    } else {
      setStep(1);
    }
  };

  useEffect(() => {
    // goNextStep();
  }, []);

  return (
    <StIntro>
      {openConfirm ? (
        <Confirm setOpenConfirm={setOpenConfirm} setStep={setStep} />
      ) : (
        <div className="intro_desc">
          <h2>공고문을 등록해봅시다!</h2>
          <div className="intro_desc_order">{divideRecruit()}</div>
          <Button purpose="recruit-register" onClick={goNextStep}>
            등록하기
          </Button>
        </div>
      )}
    </StIntro>
  );
};

export default CreateIntro;
