import { connect } from "react-redux";
import { sendMessageActionCreator, updateMessageBodyActionCreator } from "../../redux/dialogsReducer.ts";
import Dialogs from "./Dialogs";
import { withAuthRedirect } from "../../utils/hoc/withAuthRedirect";
import { compose } from "redux";

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

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)