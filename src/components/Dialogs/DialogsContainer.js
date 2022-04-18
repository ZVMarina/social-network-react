import { connect } from "react-redux";
import { sendMessageActionCreator, updateMessageBodyActionCreator } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const mapStateToProps = (state) => {
    return {
        messageText: state.dialogsPage.messageText,
        dialogsData: state.dialogsPage.dialogsData,
        messagesData: state.dialogsPage.messagesData,
        isAuth: state.auth.isAuth,
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