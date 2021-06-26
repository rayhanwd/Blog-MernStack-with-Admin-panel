import React from 'react';
import { useHistory } from 'react-router-dom';

const SingleBlog = (props) => {
    const { image, title, description, _id } = props.data;

    const history = useHistory()

    const detailPost = () => {
        history.push(`/posts/${_id}`);
    }
    return (
        <div>
            <dt className="w-700">
                <div className="mx-16">
                    <img className="w-700" src={image} />
                </div>
                <div>
                    <h1 className="mx-16 text-lg leading-6 font-medium text-gray-900">{title}</h1>
                    <dd className="mt-2 ml-16 text-base text-gray-500">{description.slice(0,200)}...<span className="text-base text-black-500 see-more" onClick={() => detailPost()}>see more</span></dd>
                </div>
            </dt>

        </div>
    );
};

export default SingleBlog;