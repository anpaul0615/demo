import React, { Component } from 'react';

import { connect } from 'react-redux';
import Navibar from '../components/Navibar';
import { fetchPost } from '../redux/modules/Post';

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
  return { ...state.Post };
};
const mapDispatchToProps = (dispatch)=>{
  return {
    handleNavibarClick: (postId)=>{
      fetchPost(postId)(dispatch);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavibarContainer);
