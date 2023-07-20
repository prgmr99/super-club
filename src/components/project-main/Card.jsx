import React from "react";
import { StCard } from "./stCard";
import BestImgContainer from "./BestImgContainer";
import BestInfoContainer from "./BestInfoContainer";

const Card = (props) => {
  return (
    <StCard>
      <BestImgContainer src={props.src} />
      <BestInfoContainer
        title={props.title}
        views={props.views}
        description={props.description}
      />
    </StCard>
  );
};

export default Card;
