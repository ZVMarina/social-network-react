function Messages() {
    return (
        <section className="dialogs">
            <h1 className="dialogs__title">Dialogs</h1>
            <div className="dialogs__container">
                <ul className="dialogs__list dialogs__list_type_dialog">
                    <li className="dialogs__item">Geralt of Rivia</li>
                    <li className="dialogs__item">Cirilla</li>
                    <li className="dialogs__item">Triss Merigold</li>
                    <li className="dialogs__item">Keira Metz</li>
                    <li className="dialogs__item">Philippa Eilhart</li>
                    <li className="dialogs__item">Sheala de Tancarville</li>
                    <li className="dialogs__item">Lodge of Sorceresses</li>
                </ul>
                <ul className="dialogs__list dialogs__list_type_messages">
                    
                </ul>
            </div>
        </section>
    )
}

export default Messages;