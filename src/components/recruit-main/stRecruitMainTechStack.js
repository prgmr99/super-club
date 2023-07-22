import { styled } from "styled-components";

export const StTechStack = styled.div`
  width: 100%;
  padding: 10px 0px;
  ul {
    flex-wrap: wrap;
    display: flex;
    justify-content: flex-start;
    gap: 15px;
    li {
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #eee;
      border-radius: 30px;
      padding: 5px 10px 5px 8px;
      gap: 5px;
      img {
        width: 3.6rem;
      }
    }
  }
`;
