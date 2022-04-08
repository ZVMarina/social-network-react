import PostsItem from "./PostsItem";
import React from "react";
import { addPostActionCreator, onPostChangeActionCreator } from "../../redax/state";

function Posts(props) {
    const postsElements = props.postsData.map(postItem => <PostsItem post={postItem.post} />);

    const newPostElement = React.createRef();

    const addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    const onPostChange = () => {
        const newPostText = newPostElement.current.value;

        props.dispatch(onPostChangeActionCreator(newPostText));
    }

    return (
        <section className="posts">
            <h2 className="posts__title">My posts</h2>
            <input className="posts__input" placeholder='your news...'
                ref={newPostElement}
                onChange={onPostChange}
                value={props.postText} />
            <button className="posts__button" onClick={addPost}>Send</button>
            <ul className="posts__item-list">
                {postsElements}
            </ul>
        </section>
    )
}

export default Posts;