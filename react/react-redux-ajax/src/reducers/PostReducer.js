import * as types from '../actions/ActionTypes';

const initialState = {
  fetching: false,
  post: {
    id: null,
    title: null,
    body: null
  },
  comments: []
};

const PostReducer = (state=initialState,action)=>{
  console.log('PostReducer :: ', action);
  switch(action.type){
    case types.FETCH_POST:
        return { ...state, ...action.data };
    case types.FETCH_POST_SUCCESS:
        return { ...state, ...action.data };
    case types.FETCH_POST_FAIL:
        return { ...state, ...action.data };
    default:
        return state;
  }
};

export default PostReducer;
