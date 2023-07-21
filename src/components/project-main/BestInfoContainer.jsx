import React from "react";
import BInfoContainer from "./BInfoContainer";

const BestInfoContainer = (props) => {
  return (
    <div>
      <BInfoContainer
        title={props.title}
        views={props.views}
        description={props.description}
      />
    </div>
  );
};

export default BestInfoContainer;
