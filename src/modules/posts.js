import axios from "axios";

const GET_POSTS = "posts/GET_POSTS";
const GET_POSTS_SUCCESS = "posts/GET_POSTS_SUCCESS";
const GET_POSTS_ERROR = "posts/GET_POSTS_ERROR";

const queryParams = {
  serviceKey: process.env.REACT_APP_SERVICE_KEY,
  returnType: "xml",
  numOfRows: 100,
  pageNo: 1,
  sidoName: "서울",
  ver: "1.0",
};

export const getPosts = () => async (dispatch, getState) => {
  dispatch({ type: GET_POSTS }); // 요청이 시작됨
  try {
    const response = await axios.get(
      "B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty",
      {
        params: queryParams,
      }
    ); // API 호출
    dispatch({ type: GET_POSTS_SUCCESS, payload: { posts: response.data } }); // 성공
  } catch (e) {
    dispatch({ type: GET_POSTS_ERROR, error: e }); // 실패
  }
};

const initialState = {
  loading: false,
  data: null,
  error: null,
};

export default function posts(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return {
        loading: true,
        data: null,
        error: null,
      };
    case GET_POSTS_SUCCESS:
      return {
        loading: false,
        data: action.payload.posts,
        error: null,
      };
    case GET_POSTS_ERROR:
      return {
        loading: false,
        data: null,
        error: action.error,
      };
    default:
      return state;
  }
}
