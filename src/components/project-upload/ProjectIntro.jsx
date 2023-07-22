import React, { useState, useRef } from "react";
import { styled } from "styled-components";
import DatePicker, { DateObject } from "react-multi-date-picker";
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
          <Test>진행 기간</Test>
          <div className="divSsum">
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
              <Img
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
              <Img src="https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg" />
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
    </IntroWrapper>
  );
};

export default ProjectIntro;

const IntroWrapper = styled.ul`
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10rem;
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

      .divSsum {
        display: flex;
        justify-content: space-between;
        width: 100%;
        gap: 10rem;
      }
      .rmdp-container {
        width: 100%;
        input {
          width: 100%;
          height: 5.6rem;
          padding: 0 0.8rem;
          box-sizing: border-box;
          border-color: #ccc;
          border-radius: 8px;
          color: #333;
          cursor: pointer;
          font-size: 1.6rem;
          /* color: #808080; */
          color: #1f1f1f;
          font-weight: 700;
          &:hover {
            border-color: #0047ff;
          }
          &:focus {
            border: 2px solid #0047ff;
            box-shadow: none;
          }
          &:focus + svg {
            stroke: #666;
          }
        }
        svg {
          width: 2.5rem;
          height: 2.5rem;
          margin-right: 0.8rem;
          stroke: #ccc;
          transition: all 0.5s;
          /* fill: pink; */
        }
      }
    }
  }
  .button-box {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .file-input {
    display: none;
  }
  .file-label {
    margin-top: 1rem;
    font-weight: 200;
    &:hover {
      color: #0984e3;
      transition: ease-in-out 0.5s;
    }
    cursor: pointer;
  }
  .file-link {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
`;

const StInput = styled.input`
  border: none;
  outline: gray solid 1px;
  border-radius: 1rem;
  width: 100%;
  height: 60px;
  padding-left: 1.1rem;
  font-weight: bold;
  font-size: 20px;
  margin-top: 10px;
  box-sizing: border-box;
`;

const Test = styled.label`
  font-size: 2.6rem;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 1.5rem;
`;

const StPreview = styled.div`
  width: 100%;
  height: 350px;
  border: gray solid 1px;
  border-radius: 1.5rem;
  box-shadow: 2px 2px 2px gray;
  overflow: hidden;
`;

const StInputLink = styled.input`
  border: none;
  outline: gray solid 1px;
  border-radius: 1rem;
  width: 90%;
  height: 27px;
  padding-left: 1.1rem;
  font-size: 15px;
  box-sizing: border-box;
`;
