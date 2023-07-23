import { styled } from "styled-components";

export const StTechStack = styled.div`
  width: 100%;
  padding: 10px 0px;
  ul {
    flex-wrap: wrap;
    display: flex;
    justify-content: flex-start;
    gap: 15px;
    @media (max-width: 760px) {
      gap: 10px;
    }
    li {
      cursor: pointer;
      user-select: none;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #eee;
      border-radius: 30px;
      padding: 5px 10px 5px 8px;
      gap: 5px;
      transition: 0.25s ease-in-out;
      span {
        @media (max-width: 920px) {
          font-size: 1.4rem;
        }
        @media (max-width: 760px) {
          font-size: 1.2rem;
        }
      }
      img {
        width: 3.6rem;
        @media (max-width: 760px) {
          width: 2.8rem;
        }
      }
      &:hover {
        color: var(--main-color);
        border: 1px solid var(--main-color);
      }
    }
  }
`;
