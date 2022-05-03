const Contacts = ({ contactsTitle, contactsValue }) => {
    return (
        <div className="contacts__item-container">
            <b className="subtitle_place_contatcs">{contactsTitle}</b>: {contactsValue}
        </div>
    )
}

export default Contacts;