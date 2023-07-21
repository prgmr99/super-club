import React from "react";
import InfoContainer from "./InfoContainer";

const NormalInfoContainer = (props) => {
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

export default NormalInfoContainer;
