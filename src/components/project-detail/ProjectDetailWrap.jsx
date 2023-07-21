import React from "react";
import { StWraper } from "./stProjectDetailWrap";
import ProjectDetailHeader from "./ProjectDetailHeader.jsx";
import ProjectDetailMeta from "./ProjectDetailMeta";
import ProjectDetailCategory from "./ProjectDetailCategory";
import ProjectDetailVideo from "./ProjectDetailVideo";
import ProjectDetailSkill from "./ProjectDetailSkill";
import ProjectDetailDesc from "./ProjectDetailDesc";
import ProjectDetailTeamMember from "./ProjectDetailTeamMember";
import Heart from "../../global/Heart";
import { AiOutlineHeart, AiFillEye } from "react-icons/ai";
import View from "../../global/View";
import CommentList from "../comment/CommentList";
import CommentForm from "../comment/CommentForm";
import Reply from "../../global/Reply";
import { SlBubble } from "react-icons/sl";

const ProjectDetailWrap = () => {
  return (
    <StWraper>
      <ProjectDetailHeader />
      <ProjectDetailMeta />
      <ProjectDetailCategory />
      <ProjectDetailVideo />
      <ProjectDetailSkill />
      <ProjectDetailDesc />
      <ProjectDetailTeamMember />
      <Heart location="project-detail">
        <AiOutlineHeart />
        <span>0개</span>
      </Heart>
      <View location="project-detail">
        <div className="view-flex">
          <AiFillEye />
          <span>0회</span>
        </div>
      </View>

      {/* 댓글 */}
      <Reply location="project-detail">
        <SlBubble />
        <span>30 개</span>
      </Reply>

      <CommentForm />
      <div className="comment-flex">
        <CommentList />
      </div>
    </StWraper>
  );
};

export default ProjectDetailWrap;
