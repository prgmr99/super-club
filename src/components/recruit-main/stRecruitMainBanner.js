import { styled } from "styled-components";

export const StBanner = styled.div`
  display: flex;
  swiper-container {
    background-color: #888;
    max-width: 100%;
    height: 330px;
    margin-bottom: 10px;
    display: flex;
    background-color: #6aa8ff;
    swiper-slide {
      display: flex;
      width: 100%;
      height: 100%;

      .swiper-slide_item {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        padding: 0 8rem;
        @media (max-width: 1380px) {
          padding: 0 4rem;
        }
        @media (max-width: 920px) {
          padding: 0 2rem;
        }
        @media (max-width: 760px) {
          padding: 0 1.2rem;
        }
        &_txt {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 2.5rem;
          flex: 1;
          font-weight: 600;
          @media (max-width: 920px) {
            gap: 1.8rem;
          }
          @media (max-width: 560px) {
            width: 100%;
            align-items: center;
          }

          h3 {
            display: flex;
            justify-content: flex-start;
            width: 70%;
            font-size: 4.2rem;
            @media (max-width: 1700px) {
              width: 80%;
              font-size: 3.6rem;
            }
            @media (max-width: 1560px) {
              font-size: 3rem;
            }
            @media (max-width: 1380px) {
              font-size: 2.6rem;
            }
            @media (max-width: 920px) {
              font-size: 2.2rem;
            }
            @media (max-width: 760px) {
              font-size: 2rem;
            }
            @media (max-width: 560px) {
              justify-content: center;
              font-size: 2.4rem;
            }
          }
          p {
            display: flex;
            justify-content: flex-start;
            width: 70%;
            font-size: 2.8rem;
            @media (max-width: 1700px) {
              width: 80%;
              font-size: 2.4rem;
            }
            @media (max-width: 1560px) {
              font-size: 2rem;
            }
            @media (max-width: 1380px) {
              font-size: 1.8rem;
            }
            @media (max-width: 920px) {
              font-size: 1.54rem;
            }
            @media (max-width: 760px) {
              font-size: 1.4rem;
            }
            @media (max-width: 560px) {
              font-size: 1.5rem;
              justify-content: center;
            }
          }
        }
        &_img {
          flex: 1;
          width: 100%;
          @media (max-width: 560px) {
            flex: 0;
          }
          img {
            width: 60%;
          }
          @media (max-width: 1210px) {
            img {
              width: 70%;
            }
            @media (max-width: 930px) {
              img {
                width: 80%;
              }
              @media (max-width: 760px) {
                img {
                  width: 90%;
                }
                @media (max-width: 560px) {
                  img {
                    display: none;
                  }
                }
              }
            }
          }
        }
      }
      .banner_community {
        background-color: #6aa8ff;
        opacity: rgba;
      }
      .banner_project {
        background-color: #563a2e;
      }
      .banner_levelup {
        background-color: #421989;
      }
    }
  }
`;
