import React from 'react';
import DialogsItem from './DialogsItem';
import MessagesItem from './MessagesItem';
import { Navigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from "formik";

const Dialogs = (props) => {
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
            <Formik className="dialogs__new-message-container"
                initialValues={{ message: "" }}
            >
                {() => (
                    <Form className="dialogs__new-message-container">
                        <Field
                            className="dialogs__new-message-content"
                            type={'text'}
                            name={'message'}
                            as={'textarea'}
                            placeholder={'Write your message here...'}
                            value={props.messageText}
                            onChange={updateMessageHandler}
                        />
                        <ErrorMessage className="form__error" name="message" component="div" />

                        <button className="button dialogs__send-button" onClick={sendMessageHandler}>Send</button>
                    </Form>
                )}
            </Formik>
        </section>
    )
}

export default Dialogs;