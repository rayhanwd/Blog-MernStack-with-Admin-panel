export const getPosts = (post) => {
    return {
        type: 'GET_POST',
        id: post.id,
        post: post,
    }
}

export const addPost = () => {
    return {
        type: 'ADD_POST'
    }
}

export const deletePost = () => {
    return {
        type: 'DELETE_POST'
    }
}

export const detailsPost = () => {
    return {
        type: 'DETAILS_POST'
    }
}