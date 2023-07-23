import React from "react";
import { StTop } from "./stTopTen";

import CurrentSlide from "./CurrentSlide";
import NextSlide from "./NextSlide";
import SlideControl from "./SlideControl";

// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import { Pagination, Navigation } from "swiper/modules";
// import { SwiperSlide, Swiper } from "swiper/react";

const TopTen = () => {
  const data = [
    {
      id: 1,
      src: "https://hanghae99.spartacodingclub.kr/_next/image?url=https%3A%2F%2Fmedia-sparta.s3.amazonaws.com%2Fmedia%2Ftempvideos%2F20211203%2Fthumb.jpeg&w=1920&q=75",
      title: "InSplace",
      desc: "외국인의 사용을 위한 다국어 기능이 특징인, 현재 위치와 날씨를 기반으로 장소를 추천해 주는 서비스",
    },
    {
      id: 2,
      src: "https://hanghae99.spartacodingclub.kr/_next/image?url=https%3A%2F%2Fmedia-sparta.s3.amazonaws.com%2Fmedia%2Ftempvideos%2F20220602%2FWillbe_Youtube_thumbnail_257.png&w=1920&q=75",
      title: "Will-be",
      desc: "개발자로 취업하고 싶은 사람들을 위한 화상면접 연습 및 리뷰 커뮤니티",
    },
    {
      id: 3,
      src: "https://hanghae99.spartacodingclub.kr/_next/image?url=https%3A%2F%2Fstatic.spartacodingclub.kr%2Fhanghae99%2Fexhibitions%2Fsuperior_boilerplate.png&w=1920&q=75",
      title: "BoilerPlate",
      desc: "‘클럽하우스’와 유사하게 통화 기능, 투표 기능, 추천 기능을 구현한 실시간 음성 기반 토론 서비스",
    },
    {
      id: 4,
      src: "https://hanghae99.spartacodingclub.kr/_next/image?url=https%3A%2F%2Fstatic.spartacodingclub.kr%2Fhanghae99%2Fexhibitions%2Fsuperior_level.png&w=1920&q=75",
      title: "외출난이도",
      desc: "날씨 정보와 사용자의 선호도를 토대로 만든 알고리즘으로 개인화된 날씨 점수를 제공하는 서비스",
    },
  ];

  // const dataMap = () =>{
  //   return data.map((el,index)=>(

  //   ))
  // }

  return (
    <StTop>
      <h2>프로JET Top 10</h2>
      <div className="slide">
        <CurrentSlide />
        <NextSlide />
        <SlideControl />
      </div>
    </StTop>
  );
};

export default TopTen;
