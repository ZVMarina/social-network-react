import PostsItem from "./PostsItem";
import React from "react";

function Posts(props) {
    const postsElements = props.profilePage.postsData.map(postItem => <PostsItem post={postItem.post} />);

    const newPostElement = React.createRef();

    const addPost = () => {
        const newPostText = newPostElement.current.value;

        props.addPost(newPostText);

        newPostElement.current.value = '';
    }

    return (
        <section className="posts">
            <h2 className="posts__title">My posts</h2>
            <input className="posts__input" placeholder='your news...' ref={newPostElement} />
            <button className="posts__button" onClick={addPost}>Send</button>
            <ul className="posts__item-list">
                {postsElements}
            </ul>
        </section>
    )
}

export default Posts;