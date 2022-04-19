import { connect } from "react-redux";
import { sendMessageActionCreator, updateMessageBodyActionCreator } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

const mapStateToProps = (state) => {
    return {
        messageText: state.dialogsPage.messageText,
        dialogsData: state.dialogsPage.dialogsData,
        messagesData: state.dialogsPage.messagesData,
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

const AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;