import React, { useState, useRef, useEffect } from "react";
import { styled } from "styled-components";
import DatePicker, { DateObject } from "react-multi-date-picker";
import { StIntroWrapper } from "./stIntroWrapper";
import { StInput, StInputLink } from "./stInputForm";
import { StPreview, StImg } from "./stPreviewImg";
import { useDispatch } from "react-redux";
import Button from "../../global/Button";
import DatePick from "../../global/DatePick";
import { addProject } from "../../modules/upload";

// title, startDate, endDate, pic, youtube

const ProjectIntro = ({ setStep, step, uploadRequest, setUploadRequest }) => {
  const imgRef = useRef();
  const dispatch = useDispatch();
  const [show, setShow] = useState(true);
  const [imgFile, setImgFile] = useState("");
  const [tempUrl, setTempUrl] = useState("");
  const [moveUrl, setMoveUrl] = useState(false);
  const [errors, setErrors] = useState({});

  // 날짜 포맷 맞추는 함수 YYYY-MM-DD
  let now = () => {
    let now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();

    const formatDate = `${year}-${month.toString().padStart(2, "0")}-${day
      .toString()
      .padStart(2, "0")}`;

    return formatDate;
  };

  const validate = () => {
    const today = now();
    let errors = {};
    if (uploadRequest.title.length === 0) {
      errors.title = "프로젝트 명을 입력해주세요.";
    }
    if (uploadRequest.pic.length === 0 && uploadRequest.youtube.length === 0) {
      errors.pic = "사진이나 영상을 넣어주세요.";
    }
    if (uploadRequest.startDate === "") {
      errors.startDate = "시작일을 지정해주세요.";
    } else if (uploadRequest.startDate > today) {
      errors.startDate = "오늘보다 전 날이어야 합니다.";
    }
    if (uploadRequest.endDate === "") {
      errors.endDate = "종료일을 지정해주세요.";
    } else if (uploadRequest.endDate > today) {
      errors.endDate = "종료일은 오늘 이후일 수 없습니다.";
    }
    return errors;
  };

  const readImg = () => {
    if (imgRef.current !== undefined) {
      const file = imgRef.current.files[0];
      uploadRequest.pic = file.name;
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
  const handleOnChange = (event) => {
    setTempUrl(event.target.value);
  };
  const handleSubmit = () => {
    setMoveUrl(true);
    setTempUrl(tempUrl.slice(-11));
  };
  const onChangeTitle = (event) => {
    setUploadRequest({
      ...uploadRequest,
      title: event.target.value,
    });
  };

  const onClickNext = () => {
    const errors = validate();
    console.log(errors);
    if (Object.keys(errors).length === 0) {
      localStorage.setItem("saveItem_project", JSON.stringify(uploadRequest));
      dispatch(addProject(uploadRequest));
      setStep(step + 1);
    } else {
      setErrors(errors);
    }
  };

  useEffect(() => {
    const savedData = localStorage.getItem("saveItem_project");
    if (savedData) {
      setUploadRequest(JSON.parse(savedData));
    } else {
      setUploadRequest({
        ...uploadRequest,
        title: "",
        startDate: "",
        endDate: "",
        pic: "",
        youtube: "",
        contents: "",
        skills: [],
        categories: [],
        teamName: "",
        members: [],
        github: "",
        deploy: "",
      });
    }
  }, []);
  console.log(uploadRequest);
  return (
    <StIntroWrapper>
      <ul className="introduction">
        <li>
          <div className="intro-title">프로젝트 이름</div>
          <StInput
            type="text"
            value={uploadRequest.title}
            placeholder="프로젝트 이름을 입력해주세요."
            onChange={onChangeTitle}
          />
          {errors.title && <div className="valid">{errors.title}</div>}
        </li>
        <li>
          <div className="intro-title ssum">
            썸네일 선택
            <div>
              <input
                type="radio"
                name="ssum"
                onChange={handleImg}
                value="picture"
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
          </div>
          {show ? (
            <>
              <label className="file-label" htmlFor="filePicture">
                {"사진 선택하기"}
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
                id="fileVideo"
              />
              <button className="youtube-btn" onClick={handleSubmit}>
                등록
              </button>
            </div>
          )}
        </li>
      </ul>
      <ul>
        <li>
          <div className="li-ssum"></div>
          <div className="intro-title">진행 기간</div>
          <div className="div-duration">
            <DatePick
              start={"start"}
              uploadRequest={uploadRequest}
              setUploadRequest={setUploadRequest}
            />
            <DatePick
              end={"end"}
              uploadRequest={uploadRequest}
              setUploadRequest={setUploadRequest}
            />
          </div>
          {errors.startDate && <div className="valid">{errors.startDate}</div>}
          {errors.endDate && <div className="valid">{errors.endDate}</div>}
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
          {errors.pic && <div className="valid">{errors.pic}</div>}
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
