import { styled } from "styled-components";

export const StConfirm = styled.div`
  width: 45rem;
  height: 45rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  border: 2px solid #eee;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  /* z-index: 2; */
  .text {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }
  .question {
    font-size: 2.5rem;
  }
  .btn-box {
    margin-top: 15rem;
    width: 70%;
    display: flex;
    justify-content: space-between;
  }
`;
