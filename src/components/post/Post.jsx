import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Posts from '../posts/Posts';

const Post = () => {
    const posts = useLoaderData();
    // console.log(posts)
    return (
        <div>
            <h1>All country: {posts.length}</h1>
            <div className='grid md:grid-cols-4 gap-8'>
                {
                    posts.map(post => <Posts
                    key={post.id}
                    post={post}
                    ></Posts>)
                }
            </div>
        </div>
    );
};

export default Post;