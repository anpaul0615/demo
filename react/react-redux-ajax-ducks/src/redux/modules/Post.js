import 'babel-polyfill';
import 'isomorphic-fetch';

/**
 * Action Types
 */
const FETCH_POST_BEFORE = 'Post/FETCH_POST_BEFORE';
const FETCH_POST_SUCCESS = 'Post/FETCH_POST_SUCCESS';
const FETCH_POST_FAIL = 'Post/FETCH_POST_FAIL';

/**
 * Action Creators
 */
export function fetchPost(postId){
    return function(dispatch){
        // before
        dispatch(fetchPostBefore());
        // fetch
        let fetchPost = fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(response=>response.json());
        let fetchCommnet = fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .then(response=>response.json());
        // after
        Promise.all([fetchPost,fetchCommnet])
        .then((results)=>{
            let post = results[0];
            let comments = results[1];
            dispatch(fetchPostSuccess(post,comments));
        })
        .catch((err)=>{
            dispatch(fetchPostFail(err));
        });
    };
};
function fetchPostBefore(){
    return {
        type: FETCH_POST_BEFORE,
        data: {
          fetching: true
        }
    }
};
function fetchPostSuccess(post,comments){
    return {
        type: FETCH_POST_SUCCESS,
        data: {
            fetching: false,
            post,
            comments
        }
    }
};
function fetchPostFail(error){
    return {
        type: FETCH_POST_FAIL,
        data: {
            fetching: false,
            error
        }
    }
};

/**
 * Reducer
 */
const initialState = {
    fetching: false,
    post: {
      id: null,
      title: null,
      body: null
    },
    comments: []
};
export default function reducer(state=initialState,action){
    console.log('Redux/Modules/Post/Reducer :: ', action);
    switch(action.type){
    case FETCH_POST_BEFORE:
        return { ...state, ...action.data };
    case FETCH_POST_SUCCESS:
        return { ...state, ...action.data };
    case FETCH_POST_FAIL:
        return { ...state, ...action.data };
    default:
        return state;
    }
};