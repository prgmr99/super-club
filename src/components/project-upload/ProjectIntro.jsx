import React, { useState, useRef } from "react";
import { styled } from "styled-components";
import DatePicker, { DateObject } from "react-multi-date-picker";
import InputIcon from "react-multi-date-picker/components/input_icon";
import transition from "react-element-popper/animations/transition";
import opacity from "react-element-popper/animations/opacity";
import Button from "../../global/Button";

const ProjectIntro = ({ setStep, step }) => {
  const [ssum, setSsum] = useState(true);
  const [imgFile, setImgFile] = useState("");
  const [imgChecked, setImgChecked] = useState(true);
  const [videoChecked, setVideoChecked] = useState(false);
  const imgRef = useRef();
  const [value, setValue] = useState(new Date());
  const [state, setState] = useState({ format: "YYYY-MM-DD" });
  const today = new DateObject();
  const weekDays = ["일", "월", "화", "수", "목", "금", "토"];
  const string = today.format("YYYY-MM-DD");

  const [saveValue, setSaveValue] = useState({
    name: "",
    startDate: "",
    endDate: "",
    image: "",
  });
  const convert = (date, format = state.format) => {
    let object = { date, format };

    setState({
      jsDate: date.toDate(),
      ...object,
    });
  };
  const readImg = () => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgFile(reader.result);
    };
  };

  const handleImg = () => {
    setVideoChecked(false);
    setImgChecked(true);
  };
  const handleVideo = () => {
    setImgChecked(false);
    setVideoChecked(true);
  };
  const onClickNext = () => {
    setStep(step + 1);

    localStorage.setItem("save", JSON.stringify(saveValue));
  };
  return (
    <IntroWrapper>
      <ul className="introduction">
        <li>
          <Test>프로젝트 이름</Test>
          <StInput type="text" placeholder="프로젝트 이름을 입력해주세요." />
        </li>
        <li>
          <Test>썸네일 선택</Test>
          <div>
            <input
              type="radio"
              value="picture"
              name="ssum"
              onChange={handleImg}
              defaultChecked
            />
            <label for="picture">사진</label>
            <input
              type="radio"
              value="video"
              name="ssum"
              onChange={handleVideo}
            />
            <label for="video">영상</label>
          </div>
          {imgChecked ? (
            <input
              type="file"
              placeholder="사진을 선택해주세요."
              accept="image/*"
              onChange={readImg}
              ref={imgRef}
              style={imgFile ? { display: "none" } : {}}
            />
          ) : (
            <input
              type="file"
              placeholder="영상을 선택해주세요."
              accept="image/*"
              onChange={readImg}
              ref={imgRef}
              style={imgFile ? { display: "none" } : {}}
            />
          )}

          {imgChecked && imgFile && <Img src={imgFile ? imgFile : "noImage"} />}
        </li>
        <li>
          <Test>기간 선택</Test>
          <div>
            <label>시작일</label>
            <DatePicker
              className="blue"
              inputClass="custom-input"
              headerOrder={["MONTH_YEAR", "LEFT_BUTTON", "RIGHT_BUTTON"]}
              render={<InputIcon />}
              format="YYYY-MM-DD"
              disableMonthPicker
              monthYearSeparator="|"
              weekDays={weekDays}
              arrow={false}
              animations={[opacity(), transition({ from: 35, duration: 800 })]}
              // value={recruitRequest.endDate}
              value={string}
              onChange={convert}
            />
            <label>종료일</label>
            <DatePicker
              className="blue"
              inputClass="custom-input"
              headerOrder={["MONTH_YEAR", "LEFT_BUTTON", "RIGHT_BUTTON"]}
              render={<InputIcon />}
              format="YYYY-MM-DD"
              disableMonthPicker
              monthYearSeparator="|"
              weekDays={weekDays}
              arrow={false}
              animations={[opacity(), transition({ from: 35, duration: 800 })]}
              // value={recruitRequest.endDate}
              value={string}
              onChange={convert}
            />
          </div>
        </li>
      </ul>
      <div className="button-box">
        <Button purpose="step" onClick={() => setStep(step - 1)}>
          이전
        </Button>
        <Button purpose="step" onClick={onClickNext}>
          다음
        </Button>
      </div>
    </IntroWrapper>
  );
};

export default ProjectIntro;

const IntroWrapper = styled.ul`
  max-width: 80%;
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 4.5rem;
    margin-left: 5rem;
    gap: 5rem;
    li {
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 1rem;
      margin-bottom: 20px;

      label {
        color: #333;
        font-weight: bold;
        .radioLabel {
          font-size: 2rem;
        }
      }

      div {
        display: flex;
        justify-content: space-between;
        gap: 3rem;
      }
    }
  }
  .button-box {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const StInput = styled.input`
  border: none;
  outline: gray solid 2px;
  border-radius: 1rem;
  width: 750px;
  height: 60px;
  padding-left: 1.1rem;
  font-weight: bold;
  font-size: 20px;
  margin-top: 10px;
`;

const Test = styled.label`
  font-size: 2.6rem;
`;

const Img = styled.img`
  width: 480px;
  height: 300px;
  border-radius: 1.5rem;
`;
