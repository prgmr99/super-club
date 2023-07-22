import { styled } from "styled-components";

export const StPosting = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(360px, auto);
  gap: 20px;
  margin-bottom: 150px;

  article.recruit_wrap {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    gap: 5px;
    padding: 30px 20px;
    border: 1px solid #eee;
    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
    border-radius: 30px;
    font-weight: 600;
    line-height: 1.2;

    .recruit_d_day {
      font-size: 1.3rem;
      background-color: #eee;
      padding: 4px 10px 4px 8px;
      border-radius: 16px;
      margin-bottom: 10px;
    }
    .recruit_view {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      &_deadline {
        display: flex;
        font-size: 1.4rem;
        color: #888;
      }
      &_icons {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        &_box {
          display: flex;
          align-items: center;
          gap: 2px;
          svg {
            padding-bottom: 2px;
          }
          &_desc {
            font-size: 1.4rem;
          }
        }
      }
    }
    .recruit_title {
      font-size: 2rem;
      text-align: left;
      margin: 8px 0;
    }

    .recruit_tech_stack {
      ul {
        display: flex;
        gap: 8px;
        li {
          margin: 10px 0;
          img {
            width: 3.8rem;
          }
        }
      }
    }
    .recruit_job_position {
      ul {
        display: flex;
        gap: 4px;
        li {
          font-size: 1.3rem;
          background-color: #f2f4f8;
          padding: 4px 10px 4px 8px;
          border-radius: 16px;
          margin-bottom: 10px;
          color: var(--main-color);
        }
      }
    }
    .recruit_profile {
      display: flex;
      align-items: center;
      gap: 2px;
      svg {
        width: 38px;
        height: 38px;
      }
      &_nickname {
        font-size: 1.4rem;
      }
    }
  }
`;
