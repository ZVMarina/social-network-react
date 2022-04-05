import DialogsItem from "./DialogsItem";
import Messages from "./Messages";

function Dialogs() {

    const dialogsData = [
        { id: 1, name: "Geralt of Rivia" },
        { id: 2, name: "Cirilla" },
        { id: 3, name: "Triss Merigold" },
        { id: 4, name: "Keira Metz" },
        { id: 5, name: "Philippa Eilhart" },
        { id: 6, name: "Sheala de Tancarville" },
        { id: 7, name: "Lodge of Sorceresse" },
    ]

    const messagesData = [
        { message: "Hey, Yen! Where is our unicorn?" },
        { message: "Yen, Geralt and I are practicing sword strikes. See you later." },
        { message: "When are you coming to the meeting, Yen?" },
    ]

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