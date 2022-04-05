function Messages() {
    return (
        <section className="dialogs">
            <h1 className="dialogs__title">Dialogs</h1>
            <div className="dialogs__container">
                <ul className="dialogs__list dialogs__list_type_dialog">
                    <li className="dialogs__item">
                        <span className="dialogs__text">Geralt of Rivia</span>
                    </li>
                    <li className="dialogs__item">
                        <span className="dialogs__text">Cirilla</span>
                    </li>
                    <li className="dialogs__item">
                        <span className="dialogs__text">Triss Merigold</span>
                    </li>
                    <li className="dialogs__item">
                        <span className="dialogs__text">Keira Metz</span>
                    </li>
                    <li className="dialogs__item">
                        <span className="dialogs__text">Philippa Eilhart</span>
                    </li>
                    <li className="dialogs__item">
                        <span className="dialogs__text">Sheala de Tancarville</span>
                    </li>
                    <li className="dialogs__item">
                        <span className="dialogs__text">Lodge of Sorceresses</span>
                    </li>
                </ul>
                <ul className="dialogs__list dialogs__list_type_messages">

                </ul>
            </div>
        </section>
    )
}

export default Messages;