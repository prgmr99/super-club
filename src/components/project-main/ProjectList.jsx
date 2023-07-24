import React from "react";
import { StListWrap } from "./stProjectList";
import ProjectItem from "./ProjectItem";

const ProjectList = () => {
  return (
    <StListWrap>
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
    </StListWrap>
  );
};

export default ProjectList;
