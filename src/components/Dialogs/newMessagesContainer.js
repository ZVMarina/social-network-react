import { connect } from "react-redux";
import { sendMessageActionCreator, updateMessageBodyActionCreator } from "../../redux/dialogsReducer";
import NewMessages from './NewMessages' 

const mapStateToProps = (state) => {
    return {
        messageText: state.dialogsPage.messageText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessageCreator: () => {
            dispatch(sendMessageActionCreator());
        },
        updateMessageBodyCreator: (newMessageText) => {
            dispatch(updateMessageBodyActionCreator(newMessageText))
        }
    }
}

const NewMessagesContainer = connect(mapStateToProps, mapDispatchToProps)(NewMessages);

export default NewMessagesContainer;

/* function MessagesContainer(props) {
    const state = props.store.getState();

    const sendMessageHandler = () => {
        props.store.dispatch(sendMessageActionCreator());
    }

    const updateMessageHandler = (newMessageText) => {
        props.store.dispatch(updateMessageBodyActionCreator(newMessageText));
    }

    return (
        <Messages sendMessageCreator={sendMessageHandler}
            updateMessageBodyCreator={updateMessageHandler}
            messageText={state.dialogsPage.messageText} />
    )
} */