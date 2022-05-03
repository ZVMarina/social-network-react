import { useParams } from "react-router-dom";
import Contacts from "./Contacts";
import ProfileStatus from "./ProfileStatus";

const ProfileData = ({ profile, myId, status, updateStatus, activeteEditMode }) => {
    const userId = Number(useParams().userId);

    return (
        <div className="profile__data">

            <div className="profile__name-container">
                <h1 className="title title_place_profile profile__name">{profile.fullName}</h1>
                {myId === userId &&
                    <button
                        className="button button_place_profile-data-edit"
                        onClick={activeteEditMode}>
                    </button>}
            </div>

            <ProfileStatus
                status={status}
                updateStatus={updateStatus}
                myId={myId}
            />

            <div className="profile__about-container">
                <b className="subtitle subtitle_place_data">About me: </b>
                <p className="profile__text">
                    {profile.aboutMe ? profile.aboutMe : 'no data'}
                </p>
            </div>

            <div className="profile__job-container">
                <b className="subtitle subtitle_place_data">Looking for a job: </b>
                <p className="profile__text">
                    {profile.lookingForAJob ? 'Yes' : 'No'}
                </p>
            </div>

            {profile.lookingForAJob &&
                <div className="profile__skills-container">
                    <b className="subtitle subtitle_place_data">My skills: </b>
                    <p className=" profile__text">
                        {profile.lookingForAJobDescription ? profile.lookingForAJobDescription : 'no data'}</p>
                </div>
            }

            <Contacts profile={profile} />
        </div>

    )
}

export default ProfileData;