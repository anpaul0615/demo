import * as types from './ActionTypes';

export const fetchPost = ()=>{
  return {
    type: types.FETCH_POST,
    data: {
      fetching: true
    }
  };
};
export const fetchPostSuccess = (post, comments)=>{
  return {
    type: types.FETCH_POST_SUCCESS,
    data: {
      fetching: false,
      post,
      comments
    }
  };
};
export const fetchPostFail = (error)=>{
  return {
    type: types.FETCH_POST_FAIL,
    data: {
      fetching: false,
      error
    }
  };
};
