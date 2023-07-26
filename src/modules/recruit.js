import { CreateRecruit } from "../apis/recruit/recruitApi";

// 액션 이름
// POST 모집 공고 생성
const POST_RECRUIT_REQUEST = "POST_RECRUIT_REQUEST";
const POST_RECRUIT_REQUEST_SUCCESS = "POST_RECRUIT_REQUEST_SUCCESS";
const POST_RECRUIT_REQUEST_FAIL = "POST_RECRUIT_REQUEST_FAIL";

// GET 모집 공고 상세 조회
// const GET_RECRUIT_DETAIL = "GET_RECRUIT_DETAIL";
// const GET_RECRUIT_SUCCESS = "GET_RECRUIT_SUCCESS";
// const GET_RECRUIT_FAIL = "GET_RECRUIT_FAIL";

// 액션 생성함수
// POST 생성 함수
const addRecruitRequest = () => {
  console.log("addRecruit 왔어요");
  return {
    type: POST_RECRUIT_REQUEST,
  };
};

const addRecruitSuccess = (payload) => {
  console.log("success 왔어요");
  // console.log("payload -------- :", payload);
  return {
    type: POST_RECRUIT_REQUEST_SUCCESS,
    payload,
  };
};

const addRecruitFail = (error) => {
  console.log("fail 왔어요");
  // console.log("error ------ :", error);
  return {
    type: POST_RECRUIT_REQUEST_FAIL,
    error,
  };
};

// 비동기 처리
export const postRecruitData = (payload) => {
  // console.log(payload);
  // console.log("비동기 처리 왔어요");
  return async (dispatch) => {
    // console.log("dispatch :", dispatch);
    // console.log("addRecruit dispatch 합니다");
    dispatch(addRecruitRequest());
    console.log(payload);
    const progress = payload.progress.id;
    const position = payload.position.map((el) => el.id);
    const duration = payload.duration.value;
    const skill = payload.skill.map((el) => el.id);
    const recruitInfo = {
      progress: progress,
      position,
      duration,
      endDate: payload.endDate,
      skill,
      github: payload.github,
      title: payload.title,
      contents: payload.contents,
    };
    console.log(recruitInfo);

    try {
      const { progress, position, duration, endDate, skill, title, contents } =
        recruitInfo;
      if (
        progress &&
        position &&
        duration &&
        endDate &&
        skill &&
        title &&
        contents
      ) {
        console.log("다 있어요");
        console.log("서버에 보낼 데이터", recruitInfo);
        console.log("CreateRecruit를 통해 서버에 요청 보냅니다.");
        const responseData = await CreateRecruit(recruitInfo);
        console.log("서버 응답 데이터:", responseData);
        console.log("성공 했을 때 dispatch 합니다.");
        dispatch(addRecruitSuccess(responseData));
      } else {
        console.log("무언가 비어있어요");
      }

      console.log(payload);
    } catch (error) {
      console.log("실패 했을 때 dispatch 합니다.");
      console.log(error);
      dispatch(addRecruitFail(error.message)); // 메세지
      dispatch(addRecruitFail(error.response.status)); // status 번호
    }
  };
};

// initial
const initalState = {
  data: {},
  isLoading: false,
  error: null,
};

// reducer (순수함수)
const recruit = (state = initalState, action) => {
  switch (action.type) {
    case POST_RECRUIT_REQUEST:
      console.log(action);
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case POST_RECRUIT_REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case POST_RECRUIT_REQUEST_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    default:
      return state;
  }
};

export default recruit;
