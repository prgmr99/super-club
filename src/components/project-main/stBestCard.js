import { styled } from "styled-components";

export const StBestCard = styled.div`
  width: 40rem;
  height: 50rem;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: hidden;
  border: 1px solid black;
  border-radius: 1rem;
  position: relative;
  &:hover {
    transform: scale(1.02);
    transition: ease-in-out 0.5s;
  }
`;
