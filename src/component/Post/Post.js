import React, { useState, useEffect } from 'react';
import Status from '../Status/Status';

const Post = () => {

    const [post, setPost] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPost(data))
    }, []);

    return (
        <div>
            <h1>Post: {post.length}</h1>
            {
                post.map(post => <Status status={post}></Status>)
            }
        </div>
    );
};

export default Post;