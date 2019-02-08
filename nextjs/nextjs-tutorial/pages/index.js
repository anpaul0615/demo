import React from 'react'
import Link from 'next/link'
import fetch from 'isomorphic-fetch'
import Layout from '../components/Layout.js'


const Index = class extends React.Component {
  static async getInitialProps() {
    console.log('Index.getInitialProps() called..!');
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json()
    console.log(`Index.getInitialProps() :: Posts fetched Count is ${posts.length}`)
    return { posts }
  }

  componentWillReceiveProps() {
    console.log('Index.componentWillReceiveProps() called..!');
  }
  componentWillUpdate() {
    console.log('Index.componentWillUpdate() called..!');
  }
  componentDidUpdate() {
    console.log('Index.componentDidUpdate() called..!');
  }
  componentWillMount() {
    console.log('Index.componentWillMount() called..!');
  }
  componentDidMount() {
    console.log('Index.componentDidMount() called..!');
  }
  componentWillUnmount() {
    console.log('Index.componentWillUnmount() called..!');
  }
  componentDidCatch() {
    console.log('Index.componentDidCatch() called..!');
  }

  render() {
    console.log('Index.render() called..!');
    const { posts } = this.props;
    return (
      <Layout>
        <h1>Index</h1>
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <Link as={`/p/${post.id}`} href={`/post?id=${post.id}`}>
                <a>{post.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </Layout>
    )
  }
}

// const PostLink = (props) => (
//   <li>
//     {/* <Link href={`/post?title=${props.title}`}> */}
//     <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
//       <a>{props.title}</a>
//     </Link>
//   </li>
// )

// const Index = (props) => (
//   <Layout>
//     <h1>Index</h1>
//     <ul>
//       {/* <PostLink id="hello-nextjs" title="Hello Next.js"/>
//       <PostLink id="learn-nextjs" title="Learn Next.js is awesome"/>
//       <PostLink id="deploy-nextjs" title="Deploy apps with Zeit"/> */}
//       {props.posts.map(post => (
//         <li key={post.id}>
//           <Link as={`/p/${post.id}`} href={`/post?id=${post.id}`}>
//             <a>{post.title}</a>
//           </Link>
//         </li>
//       ))}
//     </ul>
//   </Layout>
// )

// Index.getInitialProps = async function() {
//   console.log('Index.getInitialProps() called..!');

//   const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//   const posts = await res.json()

//   console.log(`Posts fetched. Count: ${posts.length}`)

//   return { posts }
// }

export default Index
