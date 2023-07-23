const ADD_RECRUIT = "ADD_RECRUIT";

export const addRecruit = (payload) => {
  return {
    type: ADD_RECRUIT,
    payload,
  };
};

const initalState = {
  progress: 0,
  position: [],
  endDate: new Date(),
  skill: [],
  github: "",
  title: "",
  contents: "",
};

const recruit = (state = initalState, action) => {
  // console.log("action,payload :", action.payload);

  switch (action.type) {
    case ADD_RECRUIT:
      return;
    default:
      return state;
  }
};

export default recruit;
