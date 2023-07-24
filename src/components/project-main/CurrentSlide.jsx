import React, { useEffect, useRef, useState } from "react";
// import { register } from "swiper/element/bundle";
import View from "../../global/View";
import { AiOutlineHeart, AiFillEye, AiFillHeart } from "react-icons/ai";

import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import { StCurrent } from "./stCurrentSlide";

const CurrentSlide = ({ data }) => {
  const [heart, setHeart] = useState(true);
  const handleHeart = () => {
    setHeart((cur) => !cur);
  };
  return (
    // <div className="first-slide">
    //   <swiper-container
    //     // navigation="true"
    //     // pagination="true"
    //     css-mode="true"
    //     speed="500"
    //     // autoplay="true"
    //     loop="true"
    //     slides-per-view="1"
    //   >
    //     <swiper-slide>
    //       <div className="item">
    //         <img
    //           src="https://hanghae99.spartacodingclub.kr/_next/image?url=https%3A%2F%2Fmedia-sparta.s3.amazonaws.com%2Fmedia%2Ftempvideos%2F20211203%2Fthumb.jpeg&w=1920&q=75"
    //           alt=""
    //         />
    //         <div className="item-meta">
    //           <div className="item-meta__title">타이틀</div>
    //           <View className="item-meta__view">
    //             <AiFillEye />
    //             <span> 99회</span>
    //           </View>
    //         </div>
    //         <div className="item-desc">
    //           외국인의 사용을 위한 다국어 기능이 특징인, 현재 위치와 날씨를
    //           기반으로 장소를 추천해 주는 서비스
    //         </div>
    //         <div className="item-skill">
    //           <div className="item-skill__item"></div>
    //           <div className="item-skill__item"></div>
    //           <div className="item-skill__item"></div>
    //           <div className="item-skill__item"></div>
    //           <div className="item-skill__item"></div>
    //         </div>
    //       </div>
    //     </swiper-slide>

    //     <swiper-slide>
    //       <div className="item">
    //         <img
    //           src="https://hanghae99.spartacodingclub.kr/_next/image?url=https%3A%2F%2Fmedia-sparta.s3.amazonaws.com%2Fmedia%2Ftempvideos%2F20220602%2FWillbe_Youtube_thumbnail_257.png&w=1920&q=75"
    //           alt=""
    //         />
    //         <div className="item-meta">
    //           <div className="item-meta__title">타이틀</div>
    //           <View className="item-meta__view">
    //             <AiFillEye />
    //             <span> 99회</span>
    //           </View>
    //         </div>
    //         <div className="item-desc">
    //           개발자로 취업하고 싶은 사람들을 위한 화상면접 연습 및 리뷰
    //           커뮤니티
    //         </div>
    //         <div className="item-skill">
    //           <div className="item-skill__item"></div>
    //           <div className="item-skill__item"></div>
    //           <div className="item-skill__item"></div>
    //           <div className="item-skill__item"></div>
    //           <div className="item-skill__item"></div>
    //         </div>
    //       </div>
    //     </swiper-slide>

    //     <swiper-slide>
    //       <div className="item">
    //         <img
    //           src="https://hanghae99.spartacodingclub.kr/_next/image?url=https%3A%2F%2Fstatic.spartacodingclub.kr%2Fhanghae99%2Fexhibitions%2Fsuperior_boilerplate.png&w=1920&q=75"
    //           alt=""
    //         />
    //         <div className="item-meta">
    //           <div className="item-meta__title">타이틀</div>
    //           <View className="item-meta__view">
    //             <AiFillEye />
    //             <span> 99회</span>
    //           </View>
    //         </div>
    //         <div className="item-desc">
    //           외국인의 사용을 위한 다국어 기능이 특징인, 현재 위치와 날씨를
    //           기반으로 장소를 추천해 주는 서비스
    //         </div>
    //         <div className="item-skill">
    //           <div className="item-skill__item"></div>
    //           <div className="item-skill__item"></div>
    //           <div className="item-skill__item"></div>
    //           <div className="item-skill__item"></div>
    //           <div className="item-skill__item"></div>
    //         </div>
    //       </div>
    //     </swiper-slide>

    //     <swiper-slide>
    //       <div className="item">
    //         <img
    //           src="https://hanghae99.spartacodingclub.kr/_next/image?url=https%3A%2F%2Fstatic.spartacodingclub.kr%2Fhanghae99%2Fexhibitions%2Fsuperior_level.png&w=1920&q=75"
    //           alt=""
    //         />
    //         <div className="item-meta">
    //           <div className="item-meta__title">타이틀</div>
    //           <View className="item-meta__view">
    //             <AiFillEye />
    //             <span> 99회</span>
    //           </View>
    //         </div>
    //         <div className="item-desc">
    //           외국인의 사용을 위한 다국어 기능이 특징인, 현재 위치와 날씨를
    //           기반으로 장소를 추천해 주는 서비스
    //         </div>
    //         <div className="item-skill">
    //           <div className="item-skill__item"></div>
    //           <div className="item-skill__item"></div>
    //           <div className="item-skill__item"></div>
    //           <div className="item-skill__item"></div>
    //           <div className="item-skill__item"></div>
    //         </div>
    //       </div>
    //     </swiper-slide>
    //   </swiper-container>
    // </div>

    <StCurrent className="first-slide">
      <div className="item">
        <img src={data.src} alt="" />
        <div className="item-meta">
          <div className="item-meta__title">{data.title}</div>
          <View className="item-meta__view">
            <AiFillEye />
            <span> {data.views}</span>
          </View>
        </div>
        <div className="item-desc">{data.desc}</div>
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
      </div>

      {/* <div className="item">
        <img
          src="https://hanghae99.spartacodingclub.kr/_next/image?url=https%3A%2F%2Fmedia-sparta.s3.amazonaws.com%2Fmedia%2Ftempvideos%2F20220602%2FWillbe_Youtube_thumbnail_257.png&w=1920&q=75"
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
          개발자로 취업하고 싶은 사람들을 위한 화상면접 연습 및 리뷰 커뮤니티
        </div>
        <div className="item-skill">
          <div className="item-skill__item"></div>
          <div className="item-skill__item"></div>
          <div className="item-skill__item"></div>
          <div className="item-skill__item"></div>
          <div className="item-skill__item"></div>
        </div>
      </div>

      <div className="item">
        <img
          src="https://hanghae99.spartacodingclub.kr/_next/image?url=https%3A%2F%2Fstatic.spartacodingclub.kr%2Fhanghae99%2Fexhibitions%2Fsuperior_boilerplate.png&w=1920&q=75"
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
      </div>

      <div className="item">
        <img
          src="https://hanghae99.spartacodingclub.kr/_next/image?url=https%3A%2F%2Fstatic.spartacodingclub.kr%2Fhanghae99%2Fexhibitions%2Fsuperior_level.png&w=1920&q=75"
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
      </div> */}
    </StCurrent>
  );
};

export default CurrentSlide;
