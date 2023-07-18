import React from "react";
import { StAnnounce } from "./stRecruitMainAnnouncement";
import { StTechStack } from "./stRecruitMainTechStack";

const RecruitMainAnnouncement = () => {
  return (
    <StAnnounce>
      <article className="announcement__lists">
        <div className="announcement__list--d-day">🔥 D-2</div>
        <div className="announcement__list--deadline_views_comment">
          <div className="announcement__list--deadline">
            마감일 | 2023.08.20
          </div>
          <div className="announcement__icon-lists">
            <div className="announcement__icon-list">
              <img
                className="announcement__icon--views-eye"
                src="icon__views—eye.svg"
                alt="views—eye"
              />
              <span className="announcement__icon--count announcement__list--views-eye-count">
                1
              </span>
            </div>
            <div className="announcement__icon-list">
              <img
                className="announcement__icon--comment-count"
                src="icon__comments—bubble.svg"
                alt="comments—bubble"
              />
              <span className="announcement__icon--count announcement__list--comments—bubble-count">
                0
              </span>
            </div>
          </div>
        </div>
        <div className="announcement__list--title">
          [팀원 모집] 포폴용 프로젝트에서 디자이너 분을 모십니다!
        </div>

        <div className="announcement__list--tech-stack">
          <ul>
            <li>
              <img src="icon__tech-stack--javascript.svg" alt="JavaScript" />
            </li>
            <li>
              <img src="icon__tech-stack--typescript.svg" alt="TypeScript" />
            </li>
            <li>
              <img src="icon__tech-stack--react.svg" alt="React" />
            </li>
            <li>
              <img src="icon__tech-stack--vue.svg" alt="Vue" />
            </li>
            <li>
              <img src="icon__tech-stack--svelte.svg" alt="Svelte" />
            </li>
          </ul>
        </div>

        <div className="announcement__list--job-position">
          <ul>
            <li>#프론트엔드</li>
            <li>#백엔드</li>
            <li>#디자이너</li>
          </ul>
        </div>
        <div className="announcement__list--writer-profile">
          <span className="announcement__list--writer-profile--img">
            <img src="icon__profile--person.svg" alt="profile-image" />
          </span>
          <span className="announcement__list--writer-profile--name">
            조하윤
          </span>
        </div>
      </article>
    </StAnnounce>
  );
};

export default RecruitMainAnnouncement;
