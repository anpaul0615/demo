import * as PostService from '../services/PostService';

test('Test Ajax', ()=>{
  let post = PostService.getPost(1);
  post.then((res)=>{
    console.log('ok :: ', res.data);
  }).catch((err)=>{
    console.log('fail :: ', err);
  });
});

test('Test Ajax Promise', ()=>{
  Promise.all([
    PostService.getPost(1),
    PostService.getComments(1)
  ]).then((results)=>{
    console.log('results[0] :: ', results[0].data);
    console.log('results[1] :: ', results[1].data);
  }).catch((err)=>{
    console.log('fail :: ', err);
  });
});
