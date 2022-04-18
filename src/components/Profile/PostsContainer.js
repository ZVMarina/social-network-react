import { connect } from "react-redux";
import { addPostActionCreator, updatePostBodyActionCreator } from "../../redux/profileReducer";
import Posts from "./Posts";

const mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        postText: state.profilePage.postText,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPostCreator: () => {
            dispatch(addPostActionCreator());
        },
        updatePostBodyCreator: (newPostText) => {
            dispatch(updatePostBodyActionCreator(newPostText));
        }
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;