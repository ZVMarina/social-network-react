import DialogsItem from "./DialogsItem";
import Messages from "./Messages";

function Dialogs(props) {
    const dialogsElements = props.dialogsPage.dialogsData.map(dialogItem => <DialogsItem name={dialogItem.name} id={dialogItem.id} />);
    const messagesElements = props.dialogsPage.messagesData.map(messageItem => <Messages message={messageItem.message} />);

    return (
        <section className="dialogs">
            <h1 className="dialogs__title">Dialogs</h1>
            <ul className="dialogs__list dialogs__list_type_dialog">
                {dialogsElements}
            </ul>
            <ul className="dialogs__list dialogs__list_type_messages">
                {messagesElements}
            </ul>
            <div className="dialogs__new-message-container">
                <textarea className="dialogs__new-message-content" placeholder="Write your message here..."></textarea>
                <button className="dialogs__send-button">Send</button>
            </div>
        </section>
    )
}

export default Dialogs;