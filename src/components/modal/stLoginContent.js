import { styled } from "styled-components";

export const StModalLogin = styled.div`
  position: fixed;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 42rem;
  height: 27rem;
  background-color: #fff;
  border-radius: 1.6rem;
  padding: 2rem 2rem 2rem;
  box-sizing: border-box;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  @media (max-width: 1380px) {
    width: 36rem;
    height: 24rem;
  }
  @media (max-width: 760px) {
    width: 30rem;
    height: 21rem;
    padding: 1.4rem 1.4rem 2rem;
  }
  @media (max-width: 560px) {
    width: 28rem;
  }

  .modal {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &_btn_close {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      background-color: transparent;
      border: none;
      svg {
        cursor: pointer;
        width: 4.8rem;
        height: 4.8rem;
        transition: 0.25s ease-in-out;
        opacity: 0.4;
        @media (max-width: 1380px) {
          width: 4.4rem;
          height: 4.4rem;
        }
        @media (max-width: 760px) {
          width: 4rem;
          height: 4rem;
        }
        &:hover {
          opacity: 1;
        }
      }
    }
    &_box {
      flex-wrap: wrap;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4rem;
      h2 {
        font-size: 3.6rem;
        font-weight: 600;
        @media (max-width: 1380px) {
          font-size: 2.5rem;
        }
        @media (max-width: 760px) {
          font-size: 2rem;
        }
      }
      img {
        width: 80%;
        cursor: pointer;
        transition: 0.2s ease-in-out;
        transform: translateY(2px);
        &:hover {
          transform: translateY(-2px);
        }
      }
    }
  }
`;
