import React from "react";
import { StBestInfoContainer } from "./stBestInfoContainer";
import InfoContainer from "./InfoContainer";

const BestInfoContainer = (props) => {
  return (
    <StBestInfoContainer>
      <InfoContainer
        title={props.title}
        views={props.views}
        description={props.description}
      />
    </StBestInfoContainer>
  );
};

export default BestInfoContainer;

// StBestInfoContainer = InfoContainer
