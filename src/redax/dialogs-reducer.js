const sendMessageActionType = 'SEND-MESSAGE';
const updateMessageBodyActionType = 'UPDATE-MESSAGE-TEXT';

// сюда уже придёт нужная часть стейта (dialogsPage)
const dialogsReducer = (state, action) => {
    if (action.type === sendMessageActionType) {
        const message = {
            id: 4,
            message: state.messageText
        }

        state.messagesData.push(message);
        state.messageText = '';
    }

    else if (action.type === updateMessageBodyActionType) {
        state.messageText = action.newMessageText;
    }

    return state;
}

export default dialogsReducer;