// 액션 이름
const ADD_RECRUIT = "ADD_RECRUIT";

// 액션 생성함수
export const addRecruit = (payload) => {
  // console.log(payload);
  return {
    type: ADD_RECRUIT,
    payload,
  };
};

// initial
const initalState = {
  progress: 0,
  position: [],
  endDate: new Date(),
  skill: [],
  github: "",
  title: "",
  contents: "",
  duration: "",
};

// reducer (순수함수)
const recruit = (state = initalState, action) => {
  console.log(action);
  switch (action.type) {
    case ADD_RECRUIT:
      // console.log("id :", action.payload.progress.id);
      const progress = action.payload.progress.id;
      const position = action.payload.position.map((el) => el.id);
      const duration = action.payload.duration.value;
      const skill = action.payload.skill.map((el) => el.id);

      return {
        ...state,
        progress,
        position,
        duration,
        endDate: action.payload.endDate,
        skill,
        github: action.payload.github,
        title: action.payload.title,
        contents: action.payload.contents,
      };
    default:
      return state;
  }
};

export default recruit;
