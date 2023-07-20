import React from "react";
import { StIntroduce } from "./stRecruitIntroduce";
import Button from "../../global/Button";
import { useNavigate } from "react-router-dom";

const RecruitIntroduce = ({ setStep, step }) => {
  const navigate = useNavigate();

  const submitRecruit = () => {
    console.log("등록");
    navigate("/recruit");
  };
  return (
    <StIntroduce>
      <label htmlFor="title">제목 *</label>
      <input
        id="title"
        type="text"
        placeholder="프로젝트 제목을 입력해주세요"
      />
      <label htmlFor="desc">프로젝트 소개글 *</label>
      <div className="sub">프로젝트의 소개가 자세할수록 좋아요.</div>
      <textarea
        name="introduce"
        id="desc"
        placeholder="프로젝트의 소개 내용을 10자 이상 작성해주세요."
      />
      <div className="current-number">0/1500</div>
      <div className="button-box">
        <Button purpose="step" onClick={() => setStep(step - 1)}>
          이전
        </Button>
        <Button purpose="step" onClick={submitRecruit}>
          완료
        </Button>
      </div>
    </StIntroduce>
  );
};

export default RecruitIntroduce;
