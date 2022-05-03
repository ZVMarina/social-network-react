const Contacts = ({ profile }) => {
    return (
        <div className="contacts">
            <b className="subtitle subtitle_place_data">Contacts: </b>
            {profile && Object.keys(profile.contacts)
                .map(contactKey =>
                    <div key={contactKey} className="contacts__item-container">
                        <b className="subtitile subtitle_place_contatcs">
                            {contactKey}
                        </b>: {profile.contacts[contactKey] ? profile.contacts[contactKey] : 'no data'}
                    </div>
                )
            }
        </div>
    )
}

export default Contacts;