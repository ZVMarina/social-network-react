const sendMessageActionType = 'SEND-MESSAGE';
const updateMessageBodyActionType = 'UPDATE-MESSAGE-TEXT';

const initialState = {
    dialogsData: [
        { id: 1, name: "Geralt of Rivia" },
        { id: 2, name: "Cirilla" },
        { id: 3, name: "Triss Merigold" },
        { id: 4, name: "Keira Metz" },
        { id: 5, name: "Philippa Eilhart" },
        { id: 6, name: "Sheala de Tancarville" },
        { id: 7, name: "Lodge of Sorceresse" },
    ],

    messagesData: [
        { id: 1, message: "Hey, Yen! Where is our unicorn?" },
        { id: 2, message: "Yen, Geralt and I are practicing sword strikes. See you later." },
        { id: 3, message: "When are you coming to the meeting, Yen?" },
    ],
    messageText: ''
}

// сюда уже придёт нужная часть стейта (dialogsPage)
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case sendMessageActionType:
            const message = {
                id: 4,
                message: state.messageText
            }

            const stateCopy = { ...state };
            stateCopy.messagesData = [...state.messagesData]
            stateCopy.messagesData.push(message);
            stateCopy.messageText = '';
            return stateCopy;
        case updateMessageBodyActionType: {
            const stateCopy = { ...state };
            stateCopy.messageText = action.newMessageText;
            return stateCopy;
        }
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