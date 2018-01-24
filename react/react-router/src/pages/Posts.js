import React from 'react';
import { Link } from 'react-router-dom';
import * as Models from '../models';

const Posts = ({match})=>{
    return (
        <div>
            <h2>Posts</h2>
            <hr/>
            {Models.Post.showAll().map((val,idx)=>{
                return (
                    <Link to={`/posts/${val.id}`} key={idx}>
                        {val.title}
                        <br/>
                    </Link>
                );
            })}
        </div>
    );
};

export default Posts;