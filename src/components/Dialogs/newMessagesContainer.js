import { connect } from "react-redux";
import { sendMessageActionCreator, updateMessageBodyActionCreator } from "../../redux/dialogsReducer";
import newMessages from "./newMessages";

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

const newMessagesContainer = connect(mapStateToProps, mapDispatchToProps)(newMessages);

export default newMessagesContainer;

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