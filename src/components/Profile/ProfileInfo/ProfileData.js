import { useParams } from "react-router-dom";
import ProfileStatus from "./ProfileStatus";

const Contacts = ({ contactsTitle, contactsValue }) => {
    return (
        <div className="profile__info profile__contacts">
            <b>{contactsTitle}</b>: {contactsValue}
        </div>
    )
}

const ProfileData = ({ profile, myId, status, updateStatus, activeteEditMode }) => {
    const userId = Number(useParams().userId);

    return (
        <div className="profile__data">
            <h1 className="profile__name">{profile.fullName}</h1>
            <ProfileStatus className="profile__status" status={status} updateStatus={updateStatus} myId={myId} />
            <div className="profile__about-container">
                <b className="profile__subtitle">About me: </b>
                <p className="profile__info profile__about">{profile.aboutMe ? profile.aboutMe : 'no data'}</p>
            </div>
            <div className="profile__job-container">
                <b className="profile__subtitle">Looking for a job: </b>
                <p className=" profile__info profile__job">{profile.lookingForAJob ? 'Yes' : 'No'}</p>
            </div>
            {profile.lookingForAJob &&
                <div className="profile__skills-container">
                    <b className="profile__subtitle">My skills: </b>
                    <p className=" profile__info profile__skills">
                        {profile.lookingForAJobDescription ? profile.lookingForAJobDescription : 'no data'}</p>
                </div>
            }
            <div className="profile__contacts-container">
                <b className="profile__subtitle">Contacts: </b>
                {profile && Object.keys(profile.contacts)
                    .map(contactKey =>
                        <Contacts
                            key={contactKey}
                            contactsTitle={contactKey}
                            contactsValue={profile.contacts[contactKey] ? profile.contacts[contactKey] : 'no data'}
                        />
                    )
                }
            </div>
            {myId === userId && <button onClick={activeteEditMode}>Edit</button>}
        </div>
    )
}

export default ProfileData;