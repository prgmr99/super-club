import { styled } from "styled-components";

export const StAnnounceFilter = styled.div`
  margin: 30px 0 10px;
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  ul {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 15px;
    li {
      font-size: 1.8rem;
      font-weight: 600;
    }
  }
  /* div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 15px;
    label {
      font-size: 1.8rem;
      font-weight: 600;
    }
  } */

  .wrapper {
    width: 50px;
    height: 50px;
    text-align: center;
    margin: 50px auto;
  }
  #switch {
    position: absolute;
    /* hidden */
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  .switch_label {
    position: relative;
    cursor: pointer;
    display: inline-block;
    width: 58px;
    height: 28px;
    background: #fff;
    border: 2px solid #daa;
    border-radius: 20px;
    transition: 0.2s;
  }
  .switch_label:hover {
    background: #efefef;
  }
  .onf_btn {
    position: absolute;
    top: 4px;
    left: 3px;
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 20px;
    background: #daa;
    transition: 0.2s;
  }

  /* checking style */
  #switch:checked + .switch_label {
    background: #c44;
    border: 2px solid #c44;
  }

  #switch:checked + .switch_label:hover {
    background: #e55;
  }

  /* move */
  #switch:checked + .switch_label .onf_btn {
    left: 34px;
    background: #fff;
    box-shadow: 1px 2px 3px #00000020;
  }
`;
