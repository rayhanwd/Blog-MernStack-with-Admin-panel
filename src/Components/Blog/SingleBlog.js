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
            <dt className="flex">
                <div className="mx-16">
                    <img className="" src={image} />
                </div>
                <div>
                    <p className="mx-16 text-lg leading-6 font-medium text-gray-900">{title}</p>
                    <dd className="mt-2 mx-16 text-base text-gray-500">{description}</dd>
                    <p className="mt-2 mx-16 text-base text-gray-500" onClick={() => detailPost()}>Read full post</p>
                </div>
            </dt>

        </div>
    );
};

export default SingleBlog;