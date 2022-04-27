import React from 'react';

const PostsItem = ({ post }) => {
    return (
        <li className="posts__item">
            <span className="posts__text">{post}</span>
        </li>
    )
}

export default PostsItem;