let rerenderTree = () => {
}

const state = {
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
            { message: "Hey, Yen! Where is our unicorn?" },
            { message: "Yen, Geralt and I are practicing sword strikes. See you later." },
            { message: "When are you coming to the meeting, Yen?" },
        ]
    }
}

export const addPost = () => {
    const post = {
        id: 3,
        post: state.profilePage.postText
    }

    state.profilePage.postsData.push(post);
    state.profilePage.postText = '';

    rerenderTree();
}

export const updatePostText = (newPostText) => {
    state.profilePage.postText = newPostText;

    rerenderTree();
}

export const subscribe = (observer) => {
    rerenderTree = observer;
}

export default state;