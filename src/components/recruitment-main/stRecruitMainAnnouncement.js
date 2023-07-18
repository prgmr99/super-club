import { styled } from "styled-components";

export const StAnnounce = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(360px, auto);
  gap: 20px;
  margin-bottom: 40px;
  article.announcement__lists {
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

    .announcement__list--d-day {
      font-size: 1.3rem;
      background-color: #eee;
      padding: 4px 10px 4px 8px;
      border-radius: 16px;
      margin-bottom: 10px;
    }
    .announcement__list--deadline_views_comment {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .announcement__list--deadline {
        display: flex;
        font-size: 1.4rem;
        color: #888;
      }
      .announcement__icon-lists {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        .announcement__icon-list {
          display: flex;
          align-items: center;
          gap: 2px;
          img {
            width: 1.8rem;
          }
          .announcement__icon--views-eye {
            padding-bottom: 2px;
          }
          .announcement__icon--count {
            font-size: 1.4rem;
          }
        }
      }
    }
    .announcement__list--title {
      font-size: 2rem;
      text-align: left;
      margin: 8px 0;
    }

    .announcement__list--tech-stack {
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
    .announcement__list--job-position {
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
    .announcement__list--writer-profile {
      display: flex;
      align-items: center;
      gap: 2px;
      img {
        width: 2.6rem;
      }
      .announcement__list--writer-profile--name {
        font-size: 1.4rem;
      }
    }
  }
`;
