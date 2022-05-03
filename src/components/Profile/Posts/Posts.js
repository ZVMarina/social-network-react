import PostsItem from "./PostsItem";
import React, { useState } from "react";

const Posts = ({ postsData, addPostCreator }) => {
    const postsElements = postsData.map(postItem => <PostsItem post={postItem.post} key={postItem.id} />);

    const [postText, setPostText] = useState('');
    const [disabled, setDisabled] = useState(true);

    const addPostHandler = () => {
        addPostCreator(postText);

        setPostText('');
        setDisabled(true)
    }

    const updatePostHandler = (evt) => {
        const newPostText = evt.currentTarget.value;

        if (newPostText) {
            setDisabled(false)
        } else {
            setDisabled(true)
        }

        setPostText(newPostText);
    }

    return (
        <section className="posts">
            <h2 className="title title_place-posts">My posts</h2>
            <textarea
                className="input input_place_posts"
                placeholder='your news...'
                onChange={updatePostHandler}
                value={postText}
            ></textarea>
            <button className="button button_place_posts" onClick={addPostHandler} disabled={disabled}>Send</button>
            <ul className="posts__item-list">
                {postsElements}
            </ul>
        </section>
    )
}

export default Posts;