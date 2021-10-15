import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Navs from './../Navs/Navs';
import Footer from './../Footer/Footer';

const BlogDetails = () => {
    const { _id } = useParams();
    const [post, setpost] = useState({});

    useEffect(() => {
        axios.get(`https://peaceful-mountain-40441.herokuapp.com/posts/${_id}`)
            .then(res => {
                setpost(res.data);
            })
    }, [])

    return (
        <>
            <Navs />
            <div class="container mx-auto flex flex-wrap py-10 px-20">
            <article class="flex flex-col shadow my-4">
                <a href="#" class="hover:opacity-75">
                    <img style={{margin:'0 auto'}} src={post.image} />
                </a>
                <div class="bg-white flex flex-col justify-start p-6">
                    <a href="#" class="text-blue-700 text-sm font-bold uppercase pb-4">Technology</a>
                    <a href="#" class="text-3xl font-bold hover:text-gray-700 pb-4">{post.title}</a>
                    <p href="#" class="text-sm pb-3">
                        By <a href="#" class="font-semibold hover:text-gray-800">David Grzyb</a>, Published on April 25th, 2020
                    </p>
                    <p class="pb-6">{post.description}</p>
                </div>
            </article>
            </div>
            <Footer />
        </>
    );
};

export default BlogDetails;