import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const BlogDetails = () => {
    const {_id} = useParams();
    const [post, setpost] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:5200/posts/${_id}`)
            .then(res => {
                setpost(res.data);
            })
    }, [])

    return (
        <div>
            <img src={post.image} alt="" srcset="" />
            <h3>{post.title}</h3>
            <p>{post.description}</p>
        </div>
    );
};

export default BlogDetails;