const addPostActionType = 'ADD-POST';
const updatePostBodyActionType = 'UPDATE-POST-TEXT';

// сюда уже придёт нужная часть стейта (profilePage)
const profileReducer = (state, action) => {
    switch(action.type) {
        case addPostActionType:
            const post = {
                id: 3,
                post: state.postText
            }
    
            state.postsData.push(post);
            state.postText = '';
            return state;
        case updatePostBodyActionType:
            state.postText = action.newPostText;
            return state;
        default: return state;
    }
}


export const addPostActionCreator = () => {
    return {
        type: addPostActionType,
    }
}

export const updatePostBodyActionCreator = (newPostText) => {
    return {
        type: updatePostBodyActionType, newPostText: newPostText
    }
}

export default profileReducer;