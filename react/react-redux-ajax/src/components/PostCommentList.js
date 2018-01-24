import React from 'react';
import PropTypes from 'prop-types';
import './PostCommentList.css';

import PostComment from './PostComment';

const PostCommentList = ({comments})=>{
  return (
    <ul className='PostCommentList'>
      {comments.map((comment,index)=>{
        return (
          <PostComment
            name={comment.email.split('@')[0]}
            comment={comment.body}
            key={index}
            />
        );
      })}
    </ul>
  );
};
PostCommentList.propTypes = {
  comments: PropTypes.array
};
PostCommentList.defaultProps = {
  comments: []
};

export default PostCommentList;
