import { NavLink } from "react-router-dom";
import DialogsItem from "./DialogsItem";
import Messages from "./Messages";

function Dialogs() {
    return (
        <section className="dialogs">
            <h1 className="dialogs__title">Dialogs</h1>
            <ul className="dialogs__list dialogs__list_type_dialog">
                <DialogsItem name="Geralt of Rivia" id="1" />
                <DialogsItem name="Cirilla" id="2" />
                <DialogsItem name="Triss Merigold" id="3" />
                <DialogsItem name="Keira Metz" id="4" />
                <DialogsItem name="Philippa Eilhart" id="5" />
                <DialogsItem name="Sheala de Tancarville" id="6" />
                <DialogsItem name="Lodge of Sorceresse" id="7" />
            </ul>
            <ul className="dialogs__list dialogs__list_type_messages">
                <Messages message="Hey, Yen! Where is our unicorn?"/>
                <Messages message="Yen, Geralt and I are practicing sword strikes. See you later."/>
                <Messages message="When are you coming to the meeting, Yen?"/>
            </ul>
        </section>
    )
}

export default Dialogs;