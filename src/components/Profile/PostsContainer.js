import React from "react";
import { addPostActionCreator, updatePostBodyActionCreator } from "../../redux/profile-reducer";
import Posts from "./Posts";

function PostsContainer(props) {
    const state = props.store.getState();

    const addPostHandler = () => {
        props.store.dispatch(addPostActionCreator());
    }

    const updatePostHandler = (newPostText) => {
        props.store.dispatch(updatePostBodyActionCreator(newPostText));
    }

    return (
        <Posts addPostCreator={addPostHandler} 
        updatePostBodyCreator={updatePostHandler} 
        postsData={state.profilePage.postsData}
        postText={state.profilePage.postText}/>
    )
}

export default PostsContainer;