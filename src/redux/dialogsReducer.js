const SEND_MESSAGE_ACTION_TYPE = 'dialogs/SEND-MESSAGE';
const UPDATE_MESSAGE_BODY_ACTION_TYPE = 'dialogs/UPDATE-MESSAGE-TEXT';

const initialState = {
    dialogsData: [
        { id: 1, name: "My boyfriend" },
        { id: 2, name: "My cat" },
        { id: 3, name: "My friend" },
    ],

    messagesData: [
        { id: 1, message: "Hey, Marina! Where is our avocado?" },
        { id: 2, message: "Meow! I miss you!" },
        { id: 3, message: "Hi! When are we going to the cinema, Marina?" },
    ],
    messageText: ''
}

// сюда уже придёт нужная часть стейта (dialogsPage)
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE_ACTION_TYPE:
            const message = {
                id: state.dialogsData.length + 1,
                message: state.messageText
            }

            return { 
                ...state,
                messagesData: [...state.messagesData, message],
                messageText: ''
            };

        case UPDATE_MESSAGE_BODY_ACTION_TYPE: {
            return { 
                ...state,
                messageText: action.newMessageText
            };
        }
        default: return state;
    }
}

export const sendMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE_ACTION_TYPE,
    }
}

export const updateMessageBodyActionCreator = (newMessageText) => {
    return {
        type: UPDATE_MESSAGE_BODY_ACTION_TYPE, newMessageText: newMessageText
    }
}

export default dialogsReducer;