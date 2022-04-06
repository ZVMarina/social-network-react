import DialogsItem from "./DialogsItem";
import Messages from "./Messages";

function Dialogs(props) {
    const dialogsElement = props.state.dialogsData.map(dialogItem => <DialogsItem name={dialogItem.name} id={dialogItem.id} />);
    const messagesElement = props.state.messagesData.map(messageItem => <Messages message={messageItem.message} />);

    return (
        <section className="dialogs">
            <h1 className="dialogs__title">Dialogs</h1>
            <ul className="dialogs__list dialogs__list_type_dialog">
                {dialogsElement}
            </ul>
            <ul className="dialogs__list dialogs__list_type_messages">
                {messagesElement}
            </ul>
        </section>
    )
}

export default Dialogs;