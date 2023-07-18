import styled, { css } from "styled-components";

export const StHeart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  svg {
    cursor: pointer;
    ${({ location }) => {
      switch (location) {
        case "project-detail":
          return css`
            width: 5rem;
            height: 5rem;
          `;
        case "another":
          return css`
            width: 5rem;
            height: 5rem;
          `;
        default:
          return css`
            width: 2rem;
            height: 2rem;
          `;
      }
    }}
  }
  span {
    cursor: default;
  }
`;
