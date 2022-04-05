import DialogsItem from "./DialogsItem";
import Messages from "./Messages";
import { dialogsData } from "../..";
import { messagesData } from "../..";

function Dialogs() {
    return (
        <section className="dialogs">
            <h1 className="dialogs__title">Dialogs</h1>
            <ul className="dialogs__list dialogs__list_type_dialog">
                {dialogsData.map(dialogItem => <DialogsItem name={dialogItem.name} id={dialogItem.id} />)}
            </ul>
            <ul className="dialogs__list dialogs__list_type_messages">
                {messagesData.map(messageItem => <Messages message={messageItem.message} />)}
            </ul>
        </section>
    )
}

export default Dialogs;