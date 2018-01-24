import React, { Component } from 'react';

import { connect } from 'react-redux';
import PostBody from '../components/PostBody';
import PostCommentList from '../components/PostCommentList';

class PostContainer extends Component {
  render() {
    let { post, comments } = this.props;
    return (
        <div className='PostContainer'>
          <PostBody
            title={post.title}
            body={post.body}
            />
          <PostCommentList
            comments={comments}
            />
        </div>
    )
  }
}
const mapStateToProps = (state)=>{
  return { ...state.PostState };
};
const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);
