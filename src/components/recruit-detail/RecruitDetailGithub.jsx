import React from "react";
import { StGithub } from "./stRecruitDetailGithub";
import GitHubCalendar from "react-github-calendar";

const RecruitDetailGithub = () => {
  const customStyle = {
    height: "20rem",
    width: "100%",
    "max-width": "115.3rem",
    "font-weight": "400",
  };

  // loading;
  return (
    <StGithub>
      <GitHubCalendar
        username="sdim0321"
        style={customStyle}
        fontSize={12}
        showWeekdayLabels
        // hideTotalCount={true}
        labels={{
          totalCount: "Sim0321님의 잔디입니다.",
        }}
      />
    </StGithub>
  );
};

export default RecruitDetailGithub;
