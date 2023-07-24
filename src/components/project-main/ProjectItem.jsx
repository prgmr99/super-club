import React, { useState } from "react";
import View from "../../global/View";
import { AiFillEye, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { StProjectItem } from "./stProjectItem";

const ProjectItem = () => {
  const [heart, setHeart] = useState(true);
  const handleHeart = () => {
    setHeart((cur) => !cur);
  };
  return (
    <StProjectItem>
      <img
        src="https://hanghae99.spartacodingclub.kr/_next/image?url=https%3A%2F%2Fmedia-sparta.s3.amazonaws.com%2Fmedia%2Ftempvideos%2F20211203%2Fthumb.jpeg&w=1920&q=75"
        alt=""
      />
      <div className="item-meta">
        <div className="item-meta__title">타이틀</div>
        <View className="item-meta__view">
          <AiFillEye />
          <span> 99회</span>
        </View>
      </div>
      <div className="item-desc">
        외국인의 사용을 위한 다국어 기능이 특징인, 현재 위치와 날씨를 기반으로
        장소를 추천해 주는 서비스
      </div>
      <div className="item-skill">
        <div className="item-skill__item"></div>
        <div className="item-skill__item"></div>
        <div className="item-skill__item"></div>
        <div className="item-skill__item"></div>
        <div className="item-skill__item"></div>
      </div>
      {heart ? (
        <AiOutlineHeart className="item-heart" onClick={handleHeart} />
      ) : (
        <AiFillHeart className="item-heart" onClick={handleHeart} />
      )}
    </StProjectItem>
  );
};

export default ProjectItem;
