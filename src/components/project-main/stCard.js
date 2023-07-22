import { styled } from "styled-components";

export const StCard = styled.div`
  /* width: 30rem; */
  /* height: 35rem; */
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: hidden;
  border: 1px solid black;
  border-radius: 1rem;
  position: relative;
  &.hovering {
    translate: scale(1.125);
  }
`;
