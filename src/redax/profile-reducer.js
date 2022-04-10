const addPostActionType = 'ADD-POST';
const updatePostBodyActionType = 'UPDATE-POST-TEXT';

// сюда уже придёт нужная часть стейта (profilePage)
const profileReducer = (state, action) => {
    if (action.type === addPostActionType) {
        const post = {
            id: 3,
            post: state.postText
        }

        state.postsData.push(post);
        state.postText = '';
    }

    else if (action.type === updatePostBodyActionType) {
        state.postText = action.newPostText;
    }

    return state;
}

export default profileReducer;