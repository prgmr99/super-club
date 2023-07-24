import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { StInput } from "./stInputFrom";
import { StTeamWrapper } from "./stTeamWrapper";
import { useDispatch } from "react-redux";
import { addProject } from "../../modules/upload";
import Button from "../../global/Button";

const ProjectTeam = ({ setStep, step, uploadRequest, setUploadRequest }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const validate = () => {
    let errors = {};
    if (uploadRequest.teamName.length === 0) {
      errors.teamName = "팀명을 필수입니다.";
    }
    if (uploadRequest.members.length === 0) {
      errors.members = "팀원은 필수입니다.";
    }
    if (uploadRequest.deploy.length === 0) {
      errors.deploy = "배포한 사이트 주소는 필수입니다.";
    }
    return errors;
  };
  const onChangeTeamName = (e) => {
    setUploadRequest({
      ...uploadRequest,
      teamName: e.target.value,
    });
  };
  const onChangeMember = (e) => {
    setUploadRequest({
      ...uploadRequest,
      members: [...e],
    });
  };
  const onChangeGithub = (e) => {
    setUploadRequest({
      ...uploadRequest,
      github: e.target.value,
    });
  };
  const onChangeDeploy = (e) => {
    setUploadRequest({
      ...uploadRequest,
      deploy: e.target.value,
    });
  };
  const submitProject = () => {
    const errors = validate();
    if (Object.keys(errors).length === 0) {
      dispatch(addProject(uploadRequest));
      localStorage.removeItem("saveItem_project");
      navigate("/");
    }
    setErrors(errors);
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
  return (
    <StTeamWrapper>
      <ul>
        <li>
          <div className="team-title">팀명</div>
          <StInput
            type="text"
            placeholder="팀명을 입력해주세요."
            value={uploadRequest.teamName}
            onChange={onChangeTeamName}
          />
          {errors.teamName && <div className="valid">{errors.teamName}</div>}
        </li>
        <li>
          <div className="team-title">팀원</div>
          <div>
            <StInput
              type="text"
              placeholder="팀원을 입력해주세요."
              value={uploadRequest.members}
              onChange={onChangeMember}
            />
            {errors.members && <div className="valid">{errors.members}</div>}
          </div>
        </li>
      </ul>
      <ul>
        <li>
          <div className="team-title">Github 주소</div>
          <StInput
            type="text"
            placeholder="Github 주소를 입력해주세요."
            value={uploadRequest.github}
            onChange={onChangeGithub}
          />
        </li>
        <li>
          <div className="team-title">사이트 주소</div>
          <StInput
            type="text"
            placeholder="배포한 사이트 주소를 입력해주세요."
            value={uploadRequest.deploy}
            onChange={onChangeDeploy}
          />
          {errors.deploy && <div className="valid">{errors.deploy}</div>}
        </li>
      </ul>
      <div className="button-box">
        <Button purpose="step" onClick={() => setStep(step - 1)}>
          이전
        </Button>
        <Button purpose="step" onClick={submitProject}>
          업로드
        </Button>
      </div>
    </StTeamWrapper>
  );
};

export default ProjectTeam;
