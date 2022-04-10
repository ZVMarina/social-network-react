import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state); // передаем изменивщийся стейт "подписчикам"
    }
}

export default store;