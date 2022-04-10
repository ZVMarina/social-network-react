import { sendMessageActionCreator, updateMessageBodyActionCreator } from "../../redux/dialogs-reducer";
import Messages from "./Messages";

function MessagesContainer(props) {
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
        messageText={state.dialogsPage.messageText}/>
    )
}

export default MessagesContainer;