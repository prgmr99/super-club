import React from "react";
import { styled } from "styled-components";
import Card from "./Card";

const ProjectList = () => {
  return (
    <StProject>
      <div className="grid">
        <Card
          src="https://hanghae99.spartacodingclub.kr/_next/image?url=https%3A%2F%2Fmedia-sparta.s3.amazonaws.com%2Fmedia%2Ftempvideos%2F20220602%2FWillbe_Youtube_thumbnail_257.png&w=1920&q=75"
          title="Will-be"
          views="842"
          description="개발자로 취업하고 싶은 사람들을 위한 화상면접 연습 및 리뷰 커뮤니티"
        />
        <Card
          src="https://hanghae99.spartacodingclub.kr/_next/image?url=https%3A%2F%2Fmedia-sparta.s3.amazonaws.com%2Fmedia%2Ftempvideos%2F20220602%2FWillbe_Youtube_thumbnail_257.png&w=1920&q=75"
          title="Will-be"
          views="842"
          description="개발자로 취업하고 싶은 사람들을 위한 화상면접 연습 및 리뷰 커뮤니티"
        />
        <Card
          src="https://hanghae99.spartacodingclub.kr/_next/image?url=https%3A%2F%2Fmedia-sparta.s3.amazonaws.com%2Fmedia%2Ftempvideos%2F20220602%2FWillbe_Youtube_thumbnail_257.png&w=1920&q=75"
          title="Will-be"
          views="842"
          description="개발자로 취업하고 싶은 사람들을 위한 화상면접 연습 및 리뷰 커뮤니티"
        />
        <Card
          src="https://hanghae99.spartacodingclub.kr/_next/image?url=https%3A%2F%2Fmedia-sparta.s3.amazonaws.com%2Fmedia%2Ftempvideos%2F20220602%2FWillbe_Youtube_thumbnail_257.png&w=1920&q=75"
          title="Will-be"
          views="842"
          description="개발자로 취업하고 싶은 사람들을 위한 화상면접 연습 및 리뷰 커뮤니티"
        />
        <Card
          src="https://hanghae99.spartacodingclub.kr/_next/image?url=https%3A%2F%2Fmedia-sparta.s3.amazonaws.com%2Fmedia%2Ftempvideos%2F20220602%2FWillbe_Youtube_thumbnail_257.png&w=1920&q=75"
          title="Will-be"
          views="842"
          description="개발자로 취업하고 싶은 사람들을 위한 화상면접 연습 및 리뷰 커뮤니티"
        />
        <Card
          src="https://hanghae99.spartacodingclub.kr/_next/image?url=https%3A%2F%2Fmedia-sparta.s3.amazonaws.com%2Fmedia%2Ftempvideos%2F20220602%2FWillbe_Youtube_thumbnail_257.png&w=1920&q=75"
          title="Will-be"
          views="842"
          description="개발자로 취업하고 싶은 사람들을 위한 화상면접 연습 및 리뷰 커뮤니티"
        />
        <Card
          src="https://hanghae99.spartacodingclub.kr/_next/image?url=https%3A%2F%2Fmedia-sparta.s3.amazonaws.com%2Fmedia%2Ftempvideos%2F20220602%2FWillbe_Youtube_thumbnail_257.png&w=1920&q=75"
          title="Will-be"
          views="842"
          description="개발자로 취업하고 싶은 사람들을 위한 화상면접 연습 및 리뷰 커뮤니티"
        />
        <Card
          src="https://hanghae99.spartacodingclub.kr/_next/image?url=https%3A%2F%2Fmedia-sparta.s3.amazonaws.com%2Fmedia%2Ftempvideos%2F20220602%2FWillbe_Youtube_thumbnail_257.png&w=1920&q=75"
          title="Will-be"
          views="842"
          description="개발자로 취업하고 싶은 사람들을 위한 화상면접 연습 및 리뷰 커뮤니티"
        />
        <Card
          src="https://hanghae99.spartacodingclub.kr/_next/image?url=https%3A%2F%2Fmedia-sparta.s3.amazonaws.com%2Fmedia%2Ftempvideos%2F20220602%2FWillbe_Youtube_thumbnail_257.png&w=1920&q=75"
          title="Will-be"
          views="842"
          description="개발자로 취업하고 싶은 사람들을 위한 화상면접 연습 및 리뷰 커뮤니티"
        />
      </div>
    </StProject>
  );
};

export default ProjectList;

const StProject = styled.div`
  width: 100%;
  /* border: 1px solid #eee; */
  margin-top: 50px;
  background-color: pink;
  .grid {
    display: grid;
    /* grid-template-columns: repeat(4, 1fr); */
    grid-template-columns: repeat(auto-fill, minmax(20%, auto));
    grid-template-rows: repeat(3, minmax(10rem, auto));
    row-gap: 2rem;
    column-gap: 2rem;
    justify-items: stretch;
    /* flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 40px; */
    padding-bottom: 50px;
    /* .item {
      width: 300px;
      height: 300px;
      border: 1px solid #ddd;
      border-radius: 12px;
    } */
  }
`;
