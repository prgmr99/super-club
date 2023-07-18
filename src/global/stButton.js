import styled, { css } from "styled-components";

export const StButton = styled.button`
  border-radius: 12px;
  outline: none;
  border: none;
  cursor: pointer;
  width: 10rem;
  height: 4rem;

  ${({ purpose }) => {
    switch (purpose) {
      case "register":
        return css`
          background-color: #d1d5db;
          box-shadow: 0 4px 6px -1px rgb(0 0 0/0.1),
            0 2px 4px -2px rgb(0 0 0/0.1);
          color: #4b5563;
          font-size: 2rem;
          font-weight: 500;
          &:hover {
            background-color: #3b82f6;
            color: #fff;
          }
        `;
      case "cancel":
        return css`
          background-color: transparent;
          color: #3b82f6;
          font-size: 2rem;
          font-weight: 500;
          border: 1px solid #eee;
          &:hover {
            border: 2px solid #3b82f6;
          }
        `;

      case "recomment-register":
        return css`
          background-color: #d1d5db;
          box-shadow: 0 4px 6px -1px rgb(0 0 0/0.1),
            0 2px 4px -2px rgb(0 0 0/0.1);
          color: #4b5563;
          font-size: 2rem;
          font-weight: 500;
          &:hover {
            background-color: #3b82f6;
            color: #fff;
          }
        `;

      case "recruit-register":
        return css`
          position: absolute;
          right: 28rem;
          bottom: 0;
          background-color: #d1d5db;
          box-shadow: 0 4px 6px -1px rgb(0 0 0/0.1),
            0 2px 4px -2px rgb(0 0 0/0.1);
          color: #4b5563;
          font-size: 2rem;
          font-weight: 500;
          &:hover {
            background-color: #3b82f6;
            color: #fff;
          }
        `;

      // case "another":
      //   return css`
      //     width: 5rem;
      //     height: 5rem;
      //   `;
      default:
        return css`
          width: 2rem;
          height: 2rem;
        `;
    }
  }}
`;
