import PostsItem from "./PostsItem";
import React, { useState } from "react";

const Posts = (props) => {
    const postsElements = props.postsData.map(postItem => <PostsItem post={postItem.post} key={postItem.id}/>);

    const [postText, setPostText] = useState('');

    const addPostHandler = () => {
        props.addPostCreator(postText);

        setPostText('');
    }

    const updatePostHandler = (evt) => {
        const newPostText = evt.currentTarget.value;

        setPostText(newPostText);
    }

    return (
        <section className="posts">
            <h2 className="posts__title">My posts</h2>
            <textarea 
                className="posts__input" 
                placeholder='your news...'
                onChange={updatePostHandler}
                value={postText}
                ></textarea>
            <button className="button posts__button" onClick={addPostHandler}>Send</button>
            <ul className="posts__item-list">
                {postsElements}
            </ul>
        </section>
    )
}

export default Posts;