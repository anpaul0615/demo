import PostAction from '../actions/PostAction';

test('Test Post Action', ()=>{
  console.log(PostAction.fetchPost());
  console.log(PostAction.fetchPostSuccess(null,null));
  console.log(PostAction.fetchPostFail(null));
});
