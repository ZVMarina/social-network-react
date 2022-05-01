const Contacts = ({ contactsTitle, contactsValue }) => {
    return (
        <div className="profile__info profile__contacts">
            <b>{contactsTitle}</b>: {contactsValue}
        </div>
    )
}

export default Contacts;