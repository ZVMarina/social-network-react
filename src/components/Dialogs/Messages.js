function Messages(props) {

    const sendMessageHandler = () => {
        props.sendMessageCreator();
    }

    const updateMessageHandler = (evt) => {
        const newMessageText = evt.currentTarget.value;

        props.updateMessageBodyCreator(newMessageText);
    }

    return (
        <div className="dialogs__new-message-container">
            <textarea className="dialogs__new-message-content"
                placeholder="Write your message here..."
                value={props.messageText}
                onChange={updateMessageHandler}></textarea>
            <button className="dialogs__send-button" onClick={sendMessageHandler}>Send</button>
        </div>
    )
}

export default Messages;