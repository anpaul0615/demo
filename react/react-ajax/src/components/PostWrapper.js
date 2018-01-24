import React from 'react';
import './PostWrapper.css';

const PostWrapper = (post)=>{
  return (
    <div className='PostWrapper'>
      { post.children }
    </div>
  );
};

export default PostWrapper;
