import React from 'react';

const PostsItem = (props) => {
    return (
        <li className="posts__item">
            <span className="posts__text">{props.post}</span>
        </li>
    )
}

export default PostsItem;