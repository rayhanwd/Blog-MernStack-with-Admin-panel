import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SingleBlog from './SingleBlog';

const Blog = () => {

    const [posts, setposts] = useState([]);

    useEffect(() => {
        axios.get(`https://peaceful-mountain-40441.herokuapp.com/posts`)
            .then(res => {
                setposts(res.data);
            })
    }, [])

    return (

        <div class="bg-white p-12">
            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-12">
                {
                    posts.map(post => <SingleBlog data={post} />)
                }
            </div>
            <div class="flex items-center py-8">
                <a href="#" class="h-10 w-10 bg-blue-800 hover:bg-blue-600 font-semibold text-white text-sm flex items-center justify-center">1</a>
                <a href="#" class="h-10 w-10 font-semibold text-gray-800 hover:bg-blue-600 hover:text-white text-sm flex items-center justify-center">2</a>
                <a href="#" class="h-10 w-10 font-semibold text-gray-800 hover:text-gray-900 text-sm flex items-center justify-center ml-3">Next <i class="fas fa-arrow-right ml-2"></i></a>
            </div>

        </div>
    );
};

export default Blog;