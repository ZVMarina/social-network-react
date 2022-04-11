import { connect } from "react-redux";
import { sendMessageActionCreator, updateMessageBodyActionCreator } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const mapStateToProps = (state) => {
    return {
        messageText: state.dialogsPage.messageText,
        dialogsData: state.dialogsPage.dialogsData,
        messagesData: state.dialogsPage.messagesData
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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;

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