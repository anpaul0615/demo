import React from 'react'
import fetch from 'isomorphic-fetch'
import Layout from '../components/Layout.js'


const Post = class extends React.Component {
  static async getInitialProps(context) {
    console.log('Post.getInitialProps() called..!');
    const { id } = context.query
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const post = await res.json()
    console.log(`Post.getInitialProps() :: Fetched post is ${post.title}`)
    return { post }
  }
  
  componentWillReceiveProps() {
    console.log('Post.componentWillReceiveProps() called..!');
  }
  componentWillUpdate() {
    console.log('Post.componentWillUpdate() called..!');
  }
  componentDidUpdate() {
    console.log('Post.componentDidUpdate() called..!');
  }
  componentWillMount() {
    console.log('Post.componentWillMount() called..!');
  }
  componentDidMount() {
    console.log('Post.componentDidMount() called..!');
  }
  componentWillUnmount() {
    console.log('Post.componentWillUnmount() called..!');
  }
  componentDidCatch() {
    console.log('Post.componentDidCatch() called..!');
  }

  render() {
    console.log('Post.render() called..!');
    const { post } = this.props;
    return (
      <Layout>
        <h1>{post.title} <small>{post.name}</small></h1>
        <p>{post.body}</p>
      </Layout>
    )
  }
}

// const Post = (props) => (
//   <Layout>
//     <h1>{props.post.title} <small>{props.post.name}</small></h1>
//     <p>{props.post.body}</p>
//   </Layout>
// )

// Post.getInitialProps = async function (context) {
//   console.log('Post.getInitialProps() called..!');
//   const { id } = context.query
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//   const post = await res.json()
//   console.log(`Post.getInitialProps() :: Fetched post is ${post.title}`)
//   return { post }
// }

export default Post
