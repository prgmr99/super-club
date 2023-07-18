import React from "react";
import { StMeta } from "./stProjectDetailMeta";

const ProjectDetailMeta = () => {
  const githubUrl = "https://www.naver.com";
  const serviceUrl = "https://google.com";
  // onClick={()=>{window.open(url)}}
  return (
    <StMeta className="meta">
      <div className="meta-link">
        <div className="meta-link__github">깃허브</div>
        <div className="meta-link__service">배포사이트</div>
      </div>
      <div className="meta-project">
        <div className="meta-project__date">
          2023년 07월 21일 ~ 2023년 07월 25일
        </div>
        <div className="meta-project__team">말랑카우</div>
      </div>
    </StMeta>
  );
};

export default ProjectDetailMeta;
