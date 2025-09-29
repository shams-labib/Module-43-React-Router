import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const PostDeatls = () => {
    const post = useLoaderData();

    const navigator = useNavigate();

    const handleGoBack = ()=>{
        navigator(-1)
    }


    return (
        <div>
            <h3>{post.title}</h3>
            <p>{post.body}</p>

            <button onClick={handleGoBack}>Go back</button>
        </div>
    );
};

export default PostDeatls;