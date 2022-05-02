const Contacts = ({ contactsTitle, contactsValue }) => {
    return (
        <div >
            <b className="contacts__heading">{contactsTitle}</b>: {contactsValue}
        </div>
    )
}

export default Contacts;