import React from "react";
import { StIntroduce } from "./stRecruitIntroduce";
import Button from "../../global/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addRecruit } from "../../modules/recruit";

const RecruitIntroduce = ({
  setStep,
  step,
  recruitRequest,
  setRecruitRequest,
}) => {
  // console.log(recruitRequest, setRecruitRequest);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitRecruit = () => {
    dispatch(addRecruit(recruitRequest));
    // navigate("/recruit");
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setRecruitRequest({ ...recruitRequest, [name]: value });
  };
  return (
    <StIntroduce>
      <label htmlFor="title">제목 *</label>
      <input
        id="title"
        type="text"
        name="title"
        placeholder="프로젝트 제목을 입력해주세요"
        onChange={onChangeHandler}
        value={recruitRequest.title}
      />
      <div className="title-box">
        <label htmlFor="desc">프로젝트 소개글 *</label>
        <div className="sub">프로젝트의 소개가 자세할수록 좋아요.</div>
      </div>
      <textarea
        id="desc"
        name="contents"
        placeholder="프로젝트의 소개 내용을 10자 이상 작성해주세요."
        onChange={onChangeHandler}
        value={recruitRequest.contents}
      />
      <div className="current-number">
        {recruitRequest.contents.length}/1500
      </div>
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
