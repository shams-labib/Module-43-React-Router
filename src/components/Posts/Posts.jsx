import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import Post from '../Post/Post';

const Posts = () => {
        const params = useParams();
  console.log(params)

    const posts = useLoaderData();

    return (
        <div>
            <h3>There are the posts {posts.length}</h3>
            <div>
                {
                    posts.map((post, index) => <Post key={index} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;