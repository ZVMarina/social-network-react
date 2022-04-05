function Messages() {
    return (
        <section className="dialogs">
            <h1 className="dialogs__title">Dialogs</h1>
                <ul className="dialogs__list dialogs__list_type_dialog">
                    <li className="dialogs__item dialogs__item_type_dialog">
                        <span className="dialogs__text">Geralt of Rivia</span>
                    </li>
                    <li className="dialogs__item dialogs__item_type_dialog">
                        <span className="dialogs__text">Cirilla</span>
                    </li>
                    <li className="dialogs__item dialogs__item_type_dialog">
                        <span className="dialogs__text">Triss Merigold</span>
                    </li>
                    <li className="dialogs__item dialogs__item_type_dialog">
                        <span className="dialogs__text">Keira Metz</span>
                    </li>
                    <li className="dialogs__item dialogs__item_type_dialog">
                        <span className="dialogs__text">Philippa Eilhart</span>
                    </li>
                    <li className="dialogs__item dialogs__item_type_dialog">
                        <span className="dialogs__text">Sheala de Tancarville</span>
                    </li>
                    <li className="dialogs__item dialogs__item_type_dialog">
                        <span className="dialogs__text">Lodge of Sorceresses</span>
                    </li>
                </ul>
                <ul className="dialogs__list dialogs__list_type_messages">
                    <li className="dialogs__item dialogs__item_type_messages">Hey, Yen! Where is our unicorn?</li>
                    <li className="dialogs__item dialogs__item_type_messages">Yen, Geralt and I are practicing sword strikes. See you later.</li>
                    <li className="dialogs__item dialogs__item_type_messages">When are you coming to the meeting, Yen?</li>
                </ul>
        </section>
    )
}

export default Messages;