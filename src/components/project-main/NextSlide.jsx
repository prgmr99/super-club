import React from "react";
import { StSubSlide } from "./stNextSlide";
import { AiOutlineHeart } from "react-icons/ai";

const NextSlide = () => {
  return (
    // <div className="sub-slide">
    //   <swiper-container
    //     navigation="true"
    //     pagination="true"
    //     pagination-type="fraction"
    //     css-mode="true"
    //     speed="400"
    //     // autoplay="true"
    //     loop="true"
    //     slides-per-view="1"
    //     onSlideChage={handleSlideChange}
    //   >
    //     <swiper-slide>
    //       <div className="item">
    //         <img
    //           src="https://hanghae99.spartacodingclub.kr/_next/image?url=https%3A%2F%2Fmedia-sparta.s3.amazonaws.com%2Fmedia%2Ftempvideos%2F20211203%2Fthumb.jpeg&w=1920&q=75"
    //           alt=""
    //         />
    //       </div>
    //     </swiper-slide>

    //     <swiper-slide>
    //       <div className="item">
    //         <img
    //           src="https://hanghae99.spartacodingclub.kr/_next/image?url=https%3A%2F%2Fmedia-sparta.s3.amazonaws.com%2Fmedia%2Ftempvideos%2F20220602%2FWillbe_Youtube_thumbnail_257.png&w=1920&q=75"
    //           alt=""
    //         />
    //       </div>
    //     </swiper-slide>

    //     <swiper-slide>
    //       <div className="item">
    //         <img
    //           src="https://hanghae99.spartacodingclub.kr/_next/image?url=https%3A%2F%2Fstatic.spartacodingclub.kr%2Fhanghae99%2Fexhibitions%2Fsuperior_boilerplate.png&w=1920&q=75"
    //           alt=""
    //         />
    //       </div>
    //     </swiper-slide>

    //     <swiper-slide>
    //       <div className="item">
    //         <img
    //           src="https://hanghae99.spartacodingclub.kr/_next/image?url=https%3A%2F%2Fstatic.spartacodingclub.kr%2Fhanghae99%2Fexhibitions%2Fsuperior_level.png&w=1920&q=75"
    //           alt=""
    //         />
    //       </div>
    //     </swiper-slide>
    //   </swiper-container>
    // </div>
    <StSubSlide className="sub-slide">
      <div className="item">
        <img
          src="https://hanghae99.spartacodingclub.kr/_next/image?url=https%3A%2F%2Fmedia-sparta.s3.amazonaws.com%2Fmedia%2Ftempvideos%2F20211203%2Fthumb.jpeg&w=1920&q=75"
          alt=""
        />
        <AiOutlineHeart className="heart" />
      </div>

      {/* <div className="item">
        <img
          src="https://hanghae99.spartacodingclub.kr/_next/image?url=https%3A%2F%2Fmedia-sparta.s3.amazonaws.com%2Fmedia%2Ftempvideos%2F20220602%2FWillbe_Youtube_thumbnail_257.png&w=1920&q=75"
          alt=""
        />
      </div>

      <div className="item">
        <img
          src="https://hanghae99.spartacodingclub.kr/_next/image?url=https%3A%2F%2Fstatic.spartacodingclub.kr%2Fhanghae99%2Fexhibitions%2Fsuperior_boilerplate.png&w=1920&q=75"
          alt=""
        />
      </div>

      <div className="item">
        <img
          src="https://hanghae99.spartacodingclub.kr/_next/image?url=https%3A%2F%2Fstatic.spartacodingclub.kr%2Fhanghae99%2Fexhibitions%2Fsuperior_level.png&w=1920&q=75"
          alt=""
        />
      </div> */}
    </StSubSlide>
  );
};

export default NextSlide;
