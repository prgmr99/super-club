import React from "react";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import { StSlideControl } from "./stSlideControl";

const SlideControl = () => {
  return (
    <StSlideControl className="control">
      <div className="control-prev">
        <AiFillLeftCircle />
      </div>
      <div className="control-page">
        <div className="control-page__current">01</div>
        <span className="control-page__total">04</span>
      </div>
      <div className="control-next">
        <AiFillRightCircle />
      </div>
    </StSlideControl>
  );
};

export default SlideControl;
