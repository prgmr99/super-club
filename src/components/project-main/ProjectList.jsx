import React from "react";
import { styled } from "styled-components";

const ProjectList = () => {
  return (
    <StProject>
      <div className="flex">
        <div className="item">1</div>
        <div className="item">2</div>
        <div className="item">3</div>
        <div className="item">4</div>
        <div className="item">5</div>
        <div className="item">6</div>
        <div className="item">7</div>
        <div className="item">8</div>
      </div>
    </StProject>
  );
};

export default ProjectList;

const StProject = styled.div`
  width: 100%;
  border: 1px solid #eee;
  margin-top: 50px;
  .flex {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 30px;
    padding-bottom: 50px;
    .item {
      width: 300px;
      height: 300px;
      border: 1px solid #ddd;
      border-radius: 12px;
    }
  }
`;
