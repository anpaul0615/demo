import Layout from '../layouts/MyLayout'
import Link from 'next/link'
import * as PostService from '../services/PostService'

const PostLink = (props) => (
    <li>
        <Link as={`/p/${props.id}`} href={`/post?id=${props.id}`}>
            <a>{props.title}</a>
        </Link>
    </li>
)
const Index = (props) => (
    <Layout>
        <p>Blog with Next.js</p>
        <ul>
            {props.posts.map((post)=>(
                <PostLink 
                    key={post.id} 
                    id={post.id} 
                    title={post.title} />
            ))}
        </ul>
    </Layout>
)
Index.getInitialProps = async ()=>{
    const data = await PostService.getPosts()
    const posts = await data.json()

    console.log(`Fetched Data Count : ${posts.length}`)
    return { posts }
}
export default Index