import Layout from '../layouts/MyLayout'
import * as PostService from '../services/PostService'

const Post = (props) => (
    <Layout>
        <h1>
            {props.post.title}
            <small>
                userId : {props.post.userId}
            </small>
        </h1>
        <p>{props.post.body}</p>
    </Layout>
)
Post.getInitialProps = async (context)=>{
    const { id } = context.query
    const data = await PostService.getPost(id)
    const post = await data.json()

    console.log(`Fetched Data : ${JSON.stringify(post)}`)
    return { post }
}
export default Post