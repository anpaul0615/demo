import React from 'react';
import './PostPage.css';
import 'semantic-ui-css/semantic.min.css';

import NavibarContainer from '../containers/NavibarContainer';
import PostContainer from '../containers/PostContainer';

const PostPage = ()=>{
  return (
    <div className='PostPage'>
      <NavibarContainer/>
      <PostContainer/>
    </div>
  );
};

export default PostPage;
