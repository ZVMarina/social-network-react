const Contacts = ({ contactsTitle, contactsValue }) => {
    return (
        <div className="contacts__item-container">
            <b className="contacts__item-heading">{contactsTitle}</b>: {contactsValue}
        </div>
    )
}

export default Contacts;