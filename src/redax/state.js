const addPostActionType = 'ADD-POST';
const sendMessage = 'SEND-MESSAGE';
const updatePostBodyActionType = 'UPDATE-POST-TEXT';
const updateMessageBodyActionType = 'UPDATE-MESSAGE-TEXT';

const store = {
    _state: {
        profilePage: {
            postsData: [
                { id: 1, post: "Hey, is anybody here?" },
                { id: 2, post: "It's my first post" }
            ],
            postText: ''
        },

        dialogsPage: {
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
    },
    // "менеджер" стейта, нужен, чтобы сообщить внешнему "миру" о том, что стейт изменился
    _callSubscriber() {
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === addPostActionType) {
            const post = {
                id: 3,
                post: this._state.profilePage.postText
            }

            this._state.profilePage.postsData.push(post);
            this._state.profilePage.postText = '';

            this._callSubscriber(this._state);
        }
        else if (action.type = updatePostBodyActionType) {
            this._state.profilePage.postText = action.newPostText;

            this._callSubscriber(this._state);
        }
        else if (action.type = sendMessage) {
            const message = {
                id: 4,
                message: this._state.dialogsPage.messageText
            }

            this._state.dialogsPage.messagesData.push(message);
            this._state.dialogsPage.messageText = '';

            this._callSubscriber(this._state);
        }
        else if (action.type = updateMessageBodyActionType) {
            this._state.dialogsPage.messageText = action.newMessageText;

            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => {
    return {
        type: addPostActionType,
    }
}

export const sendMessageActionCreator = () => {
    return {
        type: sendMessage,
    }
}

export const updatePostBodyActionCreator = (newPostText) => {
    return {
        type: updatePostBodyActionType, newPostText: newPostText
    }
}

export const updateMessageBodyActionCreator = (newMessageText) => {
    return {
        type: updateMessageBodyActionType, newMessageText: newMessageText
    }
}

export default store;