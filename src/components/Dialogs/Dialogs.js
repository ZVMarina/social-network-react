import DialogsItem from "./DialogsItem";
import MessagesItem from "./MessagesItem";
import MessagesContainer from "./MessagesContainer";

function Dialogs(props) {
    const dialogsElements = props.dialogsPage.dialogsData.map(dialogItem => <DialogsItem name={dialogItem.name} id={dialogItem.id} />);
    const messagesElements = props.dialogsPage.messagesData.map(messageItem => <MessagesItem message={messageItem.message} />);

    return (
        <section className="dialogs">
            <h1 className="dialogs__title">Dialogs</h1>
            <ul className="dialogs__list dialogs__list_type_dialog">
                {dialogsElements}
            </ul>
            <ul className="dialogs__list dialogs__list_type_messages">
                {messagesElements}
            </ul>
            <MessagesContainer store={props.store}/>
        </section>
    )
}

export default Dialogs;