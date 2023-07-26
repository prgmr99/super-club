import React, { useState } from "react";
import { StCategory } from "./stRecruitMainCategory";

const RecruitMainCategory = () => {
  // const [positionArray, setPositionArray] = useState([
  //   { id: 1, title: "전체", done: true },
  //   { id: 2, title: "프론트엔드", done: false },
  //   { id: 3, title: "백엔드", done: false },
  //   { id: 4, title: "디자이너", done: false },
  // ]);

  // const positionToggle = (title) => {
  //   setPositionArray(
  //     positionArray.map((el) =>
  //         ? { ...positionArray,}
  //     )
  //   );
  // };
  // const positionList = positionArray.map((el) => (
  //   <li key={el.id} onClick={() => positionToggle(el.title)}>
  //     {el.title}
  //   </li>
  // ));
  return (
    <StCategory>
      <ul>
        <li>전체</li>
        <li>프론트엔드</li>
        <li>백엔드</li>
        <li>디자이너</li>
      </ul>
      {/* <ul>{positionList}</ul> */}
    </StCategory>
  );
};

export default RecruitMainCategory;
