import { styled } from "styled-components";

export const StTeamWrapper = styled.ul`
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 4.5rem;
    gap: 10rem;

    li {
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 1rem;
      margin-bottom: 10px;

      label {
        color: #333;
        font-weight: bold;
        .radioLabel {
          font-size: 2rem;
        }
      }

      div {
        display: flex;
        justify-content: space-between;
        gap: 3rem;
      }
      .team-title {
        font-size: 2.6rem;
        font-weight: bold;
        margin-top: 1rem;
      }
    }
  }
  .button-box {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 100px;
  }
`;
