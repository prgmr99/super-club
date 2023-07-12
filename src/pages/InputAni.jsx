import React from "react";
import { styled } from "styled-components";

const input_ani = () => {
  return (
    <Stcol>
      <div className="col-3">
        <input
          className="effect-12"
          type="text"
          placeholder="Placeholder Text"
        />
        <span className="focus-bg"></span>
      </div>
    </Stcol>
  );
};

export default input_ani;

const Stcol = styled.div`
  width: 400px;
  margin: 40px 3%;
  .col-3 {
    width: 300px;
    margin: 40px 3%;
    position: relative;
    /* background-color: pink; */
  }
  input {
    font: 15px/24px "Muli", sans-serif;
    color: #333;
    width: 100%;
    box-sizing: border-box;
    letter-spacing: 1px;
    &:focus {
      outline: none;
    }
  }

  .effect-12 {
    border: 0;
    padding: 7px 15px;
    border: 1px solid #ccc;
    position: relative;
    background: transparent;
  }
  .effect-12 ~ .focus-bg {
    position: absolute;
    left: 50%;
    top: 0;
    width: 0;
    height: 100%;
    background-color: #ededed;
    transition: 0.3s;
    z-index: -1;
  }
  .effect-12:focus ~ .focus-bg {
    transition: 0.3s;
    width: 100%;
    left: 0;
  }
`;
