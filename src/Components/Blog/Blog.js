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
        <section class="w-full md:w-2/3 flex flex-col items-center px-3">
            {
                posts.map(post => <SingleBlog data={post} />)
            }

            <div class="flex items-center py-8">
                <a href="#" class="h-10 w-10 bg-blue-800 hover:bg-blue-600 font-semibold text-white text-sm flex items-center justify-center">1</a>
                <a href="#" class="h-10 w-10 font-semibold text-gray-800 hover:bg-blue-600 hover:text-white text-sm flex items-center justify-center">2</a>
                <a href="#" class="h-10 w-10 font-semibold text-gray-800 hover:text-gray-900 text-sm flex items-center justify-center ml-3">Next <i class="fas fa-arrow-right ml-2"></i></a>
            </div>

        </section>
    );
};

export default Blog;

{/* //<img className="w-full bg-cover" src="https://flaviocopes.com/react-router-uselocation-usehistory-undefined/banner.png" /> */ }