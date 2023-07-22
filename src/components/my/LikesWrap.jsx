import React, { useState } from "react";
import { StLikeWrap } from "./stLikesWrap";
import Card from "../project-main/Card";
import ProjectList from "../project-main/ProjectList";

const LikesWrap = () => {
  const categoryItem = ["프로젝트", "모집 공고"];
  const [category, setCategory] = useState("프로젝트");

  const clickCategory = (e) => {
    setCategory(e.target.innerText);
  };

  const categoryMap = () => {
    return categoryItem.map((el, i) => (
      <div className="category__item" key={i} onClick={clickCategory}>
        {el}
      </div>
    ));
  };

  return (
    <StLikeWrap>
      {/* {category} */}
      <div className="category">{categoryMap()}</div>
      {/* <div className="pracGrid">
        <div className="pracGrid__item">1</div>
        <div className="pracGrid__item">2</div>
        <div className="pracGrid__item">3</div>
        <div className="pracGrid__item">4</div>
        <div className="pracGrid__item">5</div>
        <div className="pracGrid__item">6</div>
        <div className="pracGrid__item">7</div>
        <div className="pracGrid__item">8</div>
        <div className="pracGrid__item">9</div>
      </div> */}
      {/* <div className="itemList">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div> */}
      <ProjectList />
    </StLikeWrap>
  );
};

export default LikesWrap;
