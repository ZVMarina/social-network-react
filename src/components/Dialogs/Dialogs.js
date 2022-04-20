import DialogsItem from './DialogsItem';
import MessagesItem from './MessagesItem';
import { Navigate } from 'react-router-dom';

function Dialogs(props) {
    const dialogsElements = props.dialogsData.map(dialogItem => <DialogsItem name={dialogItem.name} id={dialogItem.id} key={dialogItem.id} />);
    const messagesElements = props.messagesData.map(messageItem => <MessagesItem message={messageItem.message} key={messageItem.id} />);

    const sendMessageHandler = () => {
        props.sendMessageCreator();
    }

    const updateMessageHandler = (evt) => {
        const newMessageText = evt.currentTarget.value;

        props.updateMessageBodyCreator(newMessageText);
    }

    if (!props.isAuth) {
        return <Navigate to={'/login'} />
    }

    return (
        <section className="dialogs">
            <h1 className="title dialogs__title">Dialogs</h1>
            <ul className="dialogs__list dialogs__list_type_dialog">
                {dialogsElements}
            </ul>
            <ul className="dialogs__list dialogs__list_type_messages">
                {messagesElements}
            </ul>
            <div className="dialogs__new-message-container">
                <textarea className="dialogs__new-message-content"
                    placeholder="Write your message here..."
                    value={props.messageText}
                    onChange={updateMessageHandler}></textarea>
                <button className="button dialogs__send-button" onClick={sendMessageHandler}>Send</button>
            </div>
        </section>
    )
}

export default Dialogs;