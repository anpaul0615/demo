import React, { Component } from 'react';

import { connect } from 'react-redux';
import Navibar from '../components/Navibar';
import * as PostService from '../services/PostService';
import * as PostAction from '../actions/PostAction';

class NavibarContainer extends Component {
  componentDidMount() {
    this.props.handleNavibarClick(1);
  }
  render() {
    let { fetching, post, handleNavibarClick } = this.props;
    return (
      <Navibar
        postId={post.id}
        fetching={fetching}
        handleNavibarClick={handleNavibarClick}
        />
    )
  }
}
const mapStateToProps = (state)=>{
  return { ...state.PostState };
};
const mapDispatchToProps = (dispatch)=>{
  return {
    handleNavibarClick: (postId)=>{
      // before
      dispatch(PostAction.fetchPost());
      // fetch
      Promise.all([
        PostService.getPost(postId),
        PostService.getComments(postId)
      ])
      // after
      .then((results)=>{
        let post = results[0].data;
        let comments = results[1].data;
        dispatch(PostAction.fetchPostSuccess(post,comments));
      }).catch((err)=>{
        dispatch(PostAction.fetchPostFail(err));
        alert('The post does not exist!');
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavibarContainer);
