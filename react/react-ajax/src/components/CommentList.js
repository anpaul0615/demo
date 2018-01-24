import React from 'react';
import './CommentList.css';

import Comment from './Comment';

const CommentList = ({comments})=>{

  console.log(comments);

  return (
    <ul className='CommentList'>
      {comments.map((comment,index)=>{
        return (
          <Comment
            name={comment.email.split('@')[0]}
            body={comment.body}
            key={index}
          />
        );
      })}
    </ul>
  );
};

export default CommentList;
