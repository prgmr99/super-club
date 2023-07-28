import React, { useEffect, useState } from "react";
import { StRecruitMainPostingBox } from "./stRecruitMainPostingBox";
import { HiOutlineEye, HiUserCircle } from "react-icons/hi";
import { HiOutlineChatBubbleLeft } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

const RecruitMainPostingBox = () => {
  const navigate = useNavigate();
  const [techStackArray, setTechStackArray] = useState([
    { id: 1, title: "javascript", img: "icon__tech-stack--javascript.svg" },
    { id: 2, title: "typescript", img: "icon__tech-stack--typescript.svg" },
    { id: 3, title: "react", img: "icon__tech-stack--react.svg" },
    { id: 4, title: "svelte", img: "icon__tech-stack--svelte.svg" },
    { id: 5, title: "python", img: "icon__tech-stack--python.svg" },
    { id: 6, title: "aws", img: "icon__tech-stack--aws.svg" },
    { id: 7, title: "java", img: "icon__tech-stack--java.svg" },
  ]);

  const getMaxArr = () => {
    return techStackArray.slice(0, 5).map((el) => (
      <li key={el.id}>
        <img src={el.img} alt={el.title} />
      </li>
    ));
  };

  const clickId = (e) => {
    console.log("눌림");
    console.log(e.target.id);
    navigate(`/recruit/detail/:${e.target.id}`);
  };

  return (
    <StRecruitMainPostingBox>
      <article className="recruit_wrap" id="1" onClick={clickId}>
        <div className="recruit_d_day">🔥 D-2</div>
        <div className="recruit_view">
          <div className="recruit_view_deadline">마감일 | 2023-08-20</div>
          <div className="recruit_view_icons">
            <div className="recruit_view_icons_box">
              <HiOutlineEye />
              <span className="recruit_view_icons_box_desc">1</span>
            </div>
            <div className="recruit_view_icons_box">
              <HiOutlineChatBubbleLeft />
              <span className="recruit_view_icons_box_desc">0</span>
            </div>
          </div>
        </div>
        <div className="recruit_title">
          [팀원 모집] 포폴용 프로젝트에서 디자이너 분을 모십니다!
        </div>
        <div className="recruit_tech_stack">
          <ul>{getMaxArr()}</ul>
        </div>
        <div className="recruit_job_position">
          <ul>
            <li>#프론트엔드</li>
            <li>#백엔드</li>
            <li>#디자이너</li>
          </ul>
        </div>
        <div className="recruit_profile">
          <HiUserCircle />
          <span className="recruit_profile_nickname">조하윤</span>
        </div>
      </article>
    </StRecruitMainPostingBox>
  );
};

export default RecruitMainPostingBox;
