import React from 'react';
import PropTypes from 'prop-types';
import './PostComment.css';

const PostComment = ({name,comment})=>{
  return (
    <li className='PostComment'>
      <p>
        <b>{name}</b> {comment}
      </p>
    </li>
  );
};
PostComment.propTypes = {
  name: PropTypes.string,
  comment: PropTypes.string
};
PostComment.defaultProps = {
  name: 'no-name',
  comment: 'no-comment'
};

export default PostComment;
