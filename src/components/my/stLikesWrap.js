import { styled } from "styled-components";

export const StLikeWrap = styled.div`
  width: 100%;
  max-width: 80%;
  margin-top: 15rem;
  /* background-color: pink; */
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  margin: 15rem auto 0;

  /* border: 1px solid; */
  .category {
    width: 100%;
    display: flex;
    gap: 2rem;
    &__item {
      cursor: pointer;
      padding-bottom: 5px;
      border-bottom: 3px solid #000;
      font-size: 2rem;
    }
    margin-bottom: 10rem;
  }
  .itemList {
    margin-top: 3.2rem;
    display: flex;
    background-color: pink;
    /* justify-content: space-between; */
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
  }

  .pracGrid {
    /* background-color: pink; */
    width: 100%;
    display: grid;
    padding: 2rem;
    grid-template-columns: repeat(4, 1fr);
    /* grid-template-columns: repeat(auto-fill, minmax(20%, auto)); */
    grid-template-rows: repeat(3, minmax(10rem, auto));
    row-gap: 2rem;
    column-gap: 2rem;
    border: 1px solid;
    &__item {
      background-color: skyblue;
      border: 1px solid;
      /* height: 30rem; */
    }
  }
`;
