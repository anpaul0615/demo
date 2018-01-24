import React from 'react';
import { Link } from 'react-router-dom';
import * as Models from '../models';

const Post = ({match})=>{
    let postId = Number(match.params.id);
    let post = Models.Post.findById(postId);
    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <Link to='/posts/'>back</Link>
        </div>
    );
};

export default Post;