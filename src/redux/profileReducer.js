const addPostActionType = 'ADD-POST';
const updatePostBodyActionType = 'UPDATE-POST-TEXT';

const initialState =
{
    postsData: [
        { id: 1, post: "Hey, is anybody here?" },
        { id: 2, post: "It's my first post" }
    ],
    postText: ''
}

// сюда уже придёт нужная часть стейта (profilePage)
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case addPostActionType:
            const post = {
                id: 3,
                post: state.postText
            }

            return {
                ...state,
                postsData: [...state.postsData, post],
                postText: ''
            };

        case updatePostBodyActionType: {
            return { 
                ...state,
                postText: action.newPostText
            };
        }
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