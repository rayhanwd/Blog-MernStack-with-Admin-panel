import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Navs from './../Navs/Navs';
import Footer from './../Footer/Footer';

const BlogDetails = () => {
    const {_id} = useParams();
    const [post, setpost] = useState({});

    useEffect(() => {
        axios.get(`https://peaceful-mountain-40441.herokuapp.com/posts/${_id}`)
            .then(res => {
                setpost(res.data);
            })
    }, [])

    return (
        <>
        <Navs/>
        <div className="blog-detail">
            <img src={post.image} alt="" srcset="" />
            <h3>{post.title}</h3>
            <p>{post.description}</p>
        </div>
        <Footer/>
        </>
    );
};

export default BlogDetails;