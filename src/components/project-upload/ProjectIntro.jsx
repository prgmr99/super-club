import React, { useState, useRef } from "react";
import { styled } from "styled-components";
import DatePicker, { DateObject } from "react-multi-date-picker";
import { StIntroWrapper } from "./stIntroWrapper";
import { StInput, StInputLink } from "./stInputFrom";
import { StPreview, StImg } from "./stPreviewImg";
import InputIcon from "react-multi-date-picker/components/input_icon";
import transition from "react-element-popper/animations/transition";
import opacity from "react-element-popper/animations/opacity";
import Button from "../../global/Button";

const ProjectIntro = ({ setStep, step }) => {
  const imgRef = useRef();
  const [show, setShow] = useState(true);
  const [imgFile, setImgFile] = useState("");
  const [videoUrl, setvideoUrl] = useState("");
  const [tempUrl, setTempUrl] = useState("");
  const [moveUrl, setMoveUrl] = useState(false);
  const [value, setValue] = useState([new Date(), new Date()]);
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
  //   const convert = (date, format = state.format) => {
  //     let object = { date, format };
  //     console.log(date, format);
  //     console.log(state);
  //     setState({
  //       jsDate: date?.toDate(),
  //       ...object,
  //     });
  //   };
  const handleChange = (event) => {
    console.log(event);
  };
  const readImg = () => {
    if (imgRef.current !== undefined) {
      const file = imgRef.current.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImgFile(reader?.result);
      };
    } else return;
  };

  const handleImg = () => {
    setShow(true);
  };
  const handleVideo = () => {
    setShow(false);
  };
  const onClickNext = () => {
    setStep(step + 1);
    //localStorage.setItem("save", JSON.stringify(saveValue));
  };
  const handleOnChange = (event) => {
    console.log(event.target.value);
    setvideoUrl(event.target.value);
    setTempUrl(event.target.value);
  };
  const handleSubmit = () => {
    setMoveUrl(true);
    setTempUrl(tempUrl.slice(-11));
    setvideoUrl("");
  };
  return (
    <StIntroWrapper>
      <ul className="introduction">
        <li>
          <div className="intro-title">프로젝트 이름</div>
          <StInput type="text" placeholder="프로젝트 이름을 입력해주세요." />
        </li>
        <li>
          <div className="intro-title">썸네일 선택</div>
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
          {show ? (
            <>
              <label className="file-label" htmlFor="filePicture">
                사진 선택하기
              </label>
              <input
                type="file"
                placeholder="사진을 선택해주세요."
                accept="image/*"
                onChange={readImg}
                ref={imgRef}
                className="file-input"
                id="filePicture"
              />
            </>
          ) : (
            <div className="file-link">
              <StInputLink
                type="text"
                placeholder="영상의 링크를 입력해주세요."
                accept="image/*"
                onChange={handleOnChange}
                ref={imgRef}
                value={videoUrl}
                id="fileVideo"
              />
              <button onClick={handleSubmit}>등록</button>
            </div>
          )}
        </li>
      </ul>
      <ul>
        <li>
          <div className="li-ssum"></div>
          <div className="intro-title">진행 기간</div>
          <div className="div-ssum">
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
              onChange={handleChange}
              range
              dateSeparator=" to "
            />
          </div>
        </li>
        <li>
          <StPreview>
            {show ? (
              <StImg
                src={
                  imgFile
                    ? imgFile
                    : "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg"
                }
              />
            ) : tempUrl && moveUrl ? (
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${tempUrl}`}
                title="Project Video"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            ) : (
              <StImg src="https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg" />
            )}
          </StPreview>
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
    </StIntroWrapper>
  );
};

export default ProjectIntro;
