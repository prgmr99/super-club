import React from "react";
import { styled } from "styled-components";
import { FcPrevious, FcNext } from "react-icons/fc";
import { GrView } from "react-icons/gr";
import { BestWrapper } from "./stBestWrapper";
import { BestContainer } from "./stBestContainer";

const BestProject = () => {
  return (
    <BestWrapper>
      <BestContainer>
        <Title>프로JET Top 10</Title>
        <Bar>
          <PrevBtn>{<FcPrevious />}</PrevBtn>
          <Card>
            <ImgContainer>
              <Img
                src="https://hanghae99.spartacodingclub.kr/_next/image?url=https%3A%2F%2Fmedia-sparta.s3.amazonaws.com%2Fmedia%2Ftempvideos%2F20211203%2Fthumb.jpeg&w=1920&q=75"
                alt="First"
              />
            </ImgContainer>
            <InfoContainer>
              <Info>
                <InfoTitle>Will-be</InfoTitle>
                <IconAndViews>
                  <Icon>{<GrView />}</Icon>
                  <Views>5403</Views>
                </IconAndViews>
              </Info>
              <InfoDescription>
                개발자로 취업하고 싶은 사람들을 위한 화상면접 연습 및 리뷰
                커뮤니티
              </InfoDescription>
            </InfoContainer>
          </Card>
          <Card>
            <ImgContainer>
              <Img
                src="https://hanghae99.spartacodingclub.kr/_next/image?url=https%3A%2F%2Fmedia-sparta.s3.amazonaws.com%2Fmedia%2Ftempvideos%2F20220602%2FWillbe_Youtube_thumbnail_257.png&w=1920&q=75"
                alt="Second"
              />
            </ImgContainer>
            <InfoContainer>
              <Info>
                <InfoTitle>Will-be</InfoTitle>
                <IconAndViews>
                  <Icon>{<GrView />}</Icon>
                  <Views>124</Views>
                </IconAndViews>
              </Info>
              <InfoDescription>
                개발자로 취업하고 싶은 사람들을 위한 화상면접 연습 및 리뷰
                커뮤니티
              </InfoDescription>
            </InfoContainer>
          </Card>
          <Card>
            <ImgContainer>
              <Img
                src="https://hanghae99.spartacodingclub.kr/_next/image?url=https%3A%2F%2Fmedia-sparta.s3.amazonaws.com%2Fmedia%2Ftempvideos%2F20211203%2Fthumb.jpeg&w=1920&q=75"
                alt="Second"
              />
            </ImgContainer>
            <InfoContainer>
              <Info>
                <InfoTitle>Will-be</InfoTitle>
                <IconAndViews>
                  <Icon>{<GrView />}</Icon>
                  <Views>124</Views>
                </IconAndViews>
              </Info>
              <InfoDescription>
                개발자로 취업하고 싶은 사람들을 위한 화상면접 연습 및 리뷰
                커뮤니티
              </InfoDescription>
            </InfoContainer>
          </Card>
          <Card>
            <ImgContainer>
              <Img
                src="https://hanghae99.spartacodingclub.kr/_next/image?url=https%3A%2F%2Fmedia-sparta.s3.amazonaws.com%2Fmedia%2Ftempvideos%2F20220602%2FWillbe_Youtube_thumbnail_257.png&w=1920&q=75"
                alt="Second"
              />
            </ImgContainer>
            <InfoContainer>
              <Info>
                <InfoTitle>Will-be</InfoTitle>
                <IconAndViews>
                  <Icon>{<GrView />}</Icon>
                  <Views>124</Views>
                </IconAndViews>
              </Info>
              <InfoDescription>
                개발자로 취업하고 싶은 사람들을 위한 화상면접 연습 및 리뷰
                커뮤니티
              </InfoDescription>
            </InfoContainer>
          </Card>
          <NextBtn>{<FcNext />}</NextBtn>
        </Bar>
      </BestContainer>
    </BestWrapper>
  );
};

export default BestProject;

const Title = styled.div`
  width: 300px;
  height: 50px;
  border: 1px solid #eee;
  background-color: #1379ff;
  color: white;
  font-size: 3rem;
  margin-bottom: 6rem;
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Bar = styled.div`
  width: 100%;
  height: 60%;
  top: 15vh;
  border: 1px solid #eee;
  display: flex;
  justify-content: space-evenly;
  gap: 2rem;
  align-items: center;
  margin: 0 auto;
`;

const Card = styled.div`
  width: 30rem;
  height: 35rem;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: hidden;
  border: 1px solid black;
  border-radius: 1rem;
  position: relative;
`;

const ImgContainer = styled.div`
  width: 100%;
  height: 17rem;
`;

const Img = styled.img`
  display: block;
  box-sizing: border-box;
  position: absolute;
  height: 17rem;
  width: 30rem;
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 150%;
`;

const IconAndViews = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 0.1rem;
`;
const Views = styled.div`
  display: flex;
  align-items: center;
`;

const InfoContainer = styled.div`
  width: 300px;
  display: flex;
  padding: 20px 25px 0;
  flex-direction: column;
  gap: 8px;
  box-sizing: border-box;
`;

const InfoTitle = styled.div`
  font-weight: 600;
  font-size: 1.8rem;
  display: flex;
  justify-content: flex-start;
`;

const InfoDescription = styled.div`
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 150%;
  display: flex;
  justify-content: flex-start;
  text-align: left;
  margin: 0 auto;
`;

const PrevBtn = styled.div`
  left: 0;
  color: #6e93f7;
  transition: color 0.3s ease;
  font-size: 50px;
`;

const NextBtn = styled.div`
  right: 0;
  color: #6e93f7;
  transition: color 0.3s ease;
  font-size: 50px;
`;
