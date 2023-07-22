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
      font-size: 2.2rem;
      font-weight: 600;
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
    }
  }
`;
