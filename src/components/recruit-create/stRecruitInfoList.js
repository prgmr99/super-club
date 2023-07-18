import { styled } from "styled-components";

export const StUlWrap = styled.ul`
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  li {
    width: 45%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 1rem;

    label {
      color: #333;
      font-size: 2rem;
      font-weight: bold;
    }
    div {
      height: 5.6rem;
      width: 100%;
      border: 1px solid rgb(179, 179, 179);
      border-radius: 4px;
    }
  }

  .skill {
    li {
      width: 100%;
    }
  }
`;
