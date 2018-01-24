import React, {Component} from 'react';

import PostWrapper from '../components/PostWrapper';
import Navibar from '../components/Navibar';
import Post from '../components/Post';

import * as services from '../services';

class PostContainer extends Component {

  constructor() {
    super();
    this.state = {
      postId: 1,
      fetching: false,
      post: {
        title: null,
        body: null
      },
      comments: []
    };
  }

  async fetchPostInfo(postId) {
    // before
    this.setState({
      fetching: true
    });
    // fetch
    let post;
    let comments;
    try{
      post = await services.getPost(postId);
      comments = await services.getComments(postId);
    }catch(err){
      this.setState({
        fetching: false
      });
      return alert('The post does not exist!');
    }
    // after
    this.setState({
      postId,
      post: {
        title: post.data.title,
        boid: post.data.body
      },
      comments: comments.data,
      fetching: false
    });
  }

  handleNavibarClick = (type)=>{
    const postId = this.state.postId;
    if(type === 'NEXT')
      this.fetchPostInfo(postId+1);
    else
      this.fetchPostInfo(postId-1);
  }

  componentDidMount() {
    this.fetchPostInfo(1);
  }

  render() {
    return (
      <PostWrapper>
        <Navibar
          postId={this.state.postId}
          disabled={this.state.fetching}
          onClick={this.handleNavibarClick}
        />
        <Post
          title={this.state.post.title}
          body={this.state.post.body}
          comments={this.state.comments}
        />
      </PostWrapper>
    );
  }
}

export default PostContainer;
