import { styled } from "styled-components";

export const StIntroWrapper = styled.ul`
  ul {
    display: flex;
    justify-content: space-between;
    align-items: start;
    gap: 10rem;
    li {
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 1rem;
      margin-bottom: 20px;
      label {
        color: #333;
        font-weight: bold;
        .radioLabel {
          font-size: 2rem;
        }
      }

      .li-ssum {
        margin-top: 20px;
      }

      .intro-title {
        font-size: 2.6rem;
      }

      .div-duration {
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin-top: 10px;
        gap: 2rem;
      }

      .rmdp-container {
        width: 100%;
        input {
          width: 100%;
          height: 5.6rem;
          padding: 0 0.8rem;
          box-sizing: border-box;
          border-color: #ccc;
          border-radius: 8px;
          color: #333;
          cursor: pointer;
          font-size: 1.6rem;
          /* color: #808080; */
          color: #1f1f1f;
          font-weight: 700;
          &:hover {
            border-color: #0047ff;
          }
          &:focus {
            border: 2px solid #0047ff;
            box-shadow: none;
          }
          &:focus + svg {
            stroke: #666;
          }
        }
        svg {
          width: 2.5rem;
          height: 2.5rem;
          margin-right: 0.8rem;
          stroke: #ccc;
          transition: all 0.5s;
          /* fill: pink; */
        }
      }
    }
  }
  .button-box {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .file-input {
    display: none;
  }
  .file-label {
    margin-top: 1rem;
    font-weight: 200;
    &:hover {
      color: #0984e3;
      transition: ease-in-out 0.5s;
    }
    cursor: pointer;
  }
  .file-link {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
`;
