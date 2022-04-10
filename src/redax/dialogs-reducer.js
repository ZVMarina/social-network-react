const sendMessageActionType = 'SEND-MESSAGE';
const updateMessageBodyActionType = 'UPDATE-MESSAGE-TEXT';

// сюда уже придёт нужная часть стейта (dialogsPage)
const dialogsReducer = (state, action) => {
    switch (action.type) {
        case sendMessageActionType:
            const message = {
                id: 4,
                message: state.messageText
            }

            state.messagesData.push(message);
            state.messageText = '';
            return state;
        case updateMessageBodyActionType:
            state.messageText = action.newMessageText;
            return state;
        default: return state;
    }
}

export const sendMessageActionCreator = () => {
    return {
        type: sendMessageActionType,
    }
}

export const updateMessageBodyActionCreator = (newMessageText) => {
    return {
        type: updateMessageBodyActionType, newMessageText: newMessageText
    }
}

export default dialogsReducer;