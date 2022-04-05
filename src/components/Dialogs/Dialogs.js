import DialogsItem from "./DialogsItem";
import Messages from "./Messages";

function Dialogs(props) {
    return (
        <section className="dialogs">
            <h1 className="dialogs__title">Dialogs</h1>
            <ul className="dialogs__list dialogs__list_type_dialog">
                {props.state.dialogsData.map(dialogItem => <DialogsItem name={dialogItem.name} id={dialogItem.id} />)}
            </ul>
            <ul className="dialogs__list dialogs__list_type_messages">
                {props.state.messagesData.map(messageItem => <Messages message={messageItem.message} />)}
            </ul>
        </section>
    )
}

export default Dialogs;