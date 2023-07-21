import React from "react";
import { StCard } from "./stCard";
import NormalImgContainer from "./NormalImgContainer";
import NormalInfoContainer from "./NormalInfoContainer";

const Card = (props) => {
  return (
    <StCard>
      <NormalImgContainer src={props.src} />
      <NormalInfoContainer
        title={props.title}
        views={props.views}
        description={props.description}
      />
    </StCard>
  );
};

export default Card;
