import React from "react";
import { StBestCard } from "./stBestCard";
import BestImgContainer from "./BestImgContainer";
import BestInfoContainer from "./BestInfoContainer";

const BestCard = (props) => {
  return (
    <StBestCard>
      <BestImgContainer src={props.src} />
      <BestInfoContainer
        title={props.title}
        views={props.views}
        description={props.description}
      />
    </StBestCard>
  );
};

export default BestCard;
