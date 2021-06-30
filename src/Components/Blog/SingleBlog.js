import React from 'react';
import { useHistory } from 'react-router-dom';

const SingleBlog = (props) => {
    const { image, title, description, _id } = props.data;

    const history = useHistory()

    const detailPost = () => {
        history.push(`/posts/${_id}`);
    }
    return (
        <article class="flex flex-col shadow mt-4 mr-10 mb-10">

            <a href="#" class="hover:opacity-75">
                <img style={{margin:'0 auto'}} src={image} />
            </a>
            <div class="bg-white flex flex-col justify-start p-6">
                <a href="#" class="text-blue-700 text-sm font-bold uppercase pb-4">Technology</a>
                <a href="#" class="text-3xl font-bold hover:text-gray-700 pb-4">{title}</a>
                <p href="#" class="text-sm pb-3">
                    By <a href="#" class="font-semibold hover:text-gray-800">David Grzyb</a>, Published on April 25th, 2020
                </p>
                <a href="#" class="pb-6">{description}</a>
                <p style={{cursor:'pointer'}} onClick={() => detailPost()} class="uppercase text-gray-800 hover:text-black">Continue Reading <i class="fas fa-arrow-right"></i></p>
            </div>
        </article>
    );
};

export default SingleBlog;