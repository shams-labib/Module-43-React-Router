import React from 'react';
import { Link, useNavigate } from 'react-router';

const Post = ({post}) => {
    const {id, title} = post;
    const Navigate = useNavigate();

    const handlNavigate = ()=>{
                Navigate(`/posts/${id}`)
    }

    return (
        <div style={{
            border: '2px solid red',
            padding: '15px'
        }}>
            <h3>{title}</h3>

            <Link to={`/posts/${id}`}>
            <button>Show Details</button>
            </Link>

            <button onClick={handlNavigate}>Details Of : {id}</button>
        </div>
    );
};

export default Post;