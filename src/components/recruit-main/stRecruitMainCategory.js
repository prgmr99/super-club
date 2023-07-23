import { styled } from "styled-components";

export const StCategory = styled.div`
  width: 100%;
  margin: 60px 0 10px;
  display: flex;
  border-bottom: 1px solid #eee;
  ul {
    display: flex;
    align-items: center;
    gap: 15px;
    li {
      color: #b8b8b8;
      cursor: pointer;
      user-select: none;
      font-size: 2.2rem;
      font-weight: 600;
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      padding: 0 1rem;
      transition: 0.3s ease-in-out;
      @media (max-width: 1380px) {
        font-size: 2rem;
      }
      @media (max-width: 920px) {
        font-size: 1.8rem;
      }
      @media (max-width: 760px) {
        font-size: 1.6rem;
        height: 40px;
      }
    }
    li:first-child {
      color: #000;
      border-bottom: 4px solid #000;
    }
    li:hover {
      color: #000;
    }
  }
`;
