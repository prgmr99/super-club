import React from "react";
import InfoContainer from "./InfoContainer";

const BestInfoContainer = (props) => {
  return (
    <div>
      <InfoContainer
        title={props.title}
        views={props.views}
        description={props.description}
      />
    </div>
  );
};

export default BestInfoContainer;

// StBestInfoContainer = InfoContainer
