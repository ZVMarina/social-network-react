import PostsItem from "./PostsItem";
import React from "react";

function Posts(props) {
    const postsElements = props.postsData.map(postItem => <PostsItem post={postItem.post} />);

    const addPostHandler = () => {
        props.addPostCreator();
    }

    const updatePostHandler = (evt) => {
        const newPostText = evt.currentTarget.value;

        props.updatePostBodyCreator(newPostText);
    }

    return (
        <section className="posts">
            <h2 className="posts__title">My posts</h2>
            <textarea className="posts__input" placeholder='your news...'
                onChange={updatePostHandler}
                value={props.postText}></textarea>
            <button className="posts__button" onClick={addPostHandler}>Send</button>
            <ul className="posts__item-list">
                {postsElements}
            </ul>
        </section>
    )
}

export default Posts;