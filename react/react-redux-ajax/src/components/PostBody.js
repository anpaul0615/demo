import React from 'react';
import PropTypes from 'prop-types';
import './PostBody.css';

const PostBody = ({title,body,comments})=>{
  return (
    <div className='PostBody'>
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  );
};
PostBody.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string
};
PostBody.defaultProps = {
  title: 'no-data',
  body: 'no-data'
};

export default PostBody;
