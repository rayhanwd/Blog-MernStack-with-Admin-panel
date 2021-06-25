import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SingleBlog from './SingleBlog';

const Blog = () => {

    const [posts, setposts] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5200/posts`)
            .then(res => {
                setposts(res.data);
            })
    }, [])

    return (
        <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="mt-10">
                <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-1 md:gap-x-8 md:gap-y-10">
                    {posts.map((post) => (
                        <SingleBlog data={post} key={post._id}/>
                    ))}
                </dl>
            </div>
        </div>
    );
};

export default Blog;

//<img className="w-full bg-cover" src="https://flaviocopes.com/react-router-uselocation-usehistory-undefined/banner.png" />