import React from "react";
import { StWraper } from "./stRecruitDetailWrap";
import RecruitDetailHeader from "./RecruitDetailHeader";
import RecruitDetailMeta from "./RecruitDetailMeta";
import RecruitDetailGithub from "./RecruitDetailGithub";
import RecruitDetailInfo from "./RecruitDetailInfo";
import RecruitDetailDesc from "./RecruitDetailDesc";
import Quarter from "./../../global/Quarter";
import BookMark from "../fixed/BookMark";
import Reply from "../../global/Reply";
import { SlBubble } from "react-icons/sl";
import CommentForm from "../comment/CommentForm";
import CommentList from "../comment/CommentList";

const RecruitDetailWrap = () => {
  return (
    <StWraper>
      <RecruitDetailHeader />
      <RecruitDetailMeta />
      <RecruitDetailGithub />
      <Quarter />
      <RecruitDetailInfo />
      <Quarter />
      <RecruitDetailDesc />

      <Quarter />

      {/* 댓글 */}
      <Reply location="recruit-detail">
        <SlBubble />
        <span>30 개</span>
      </Reply>

      <CommentForm />
      <div className="comment-flex">
        <CommentList />
      </div>

      <BookMark />
    </StWraper>
  );
};

export default RecruitDetailWrap;

// 헤더 유저프로필,이름,작성일,조회수 깃허브 잔디
