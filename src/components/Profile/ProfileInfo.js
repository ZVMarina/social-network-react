import Preloader from '../Preloader'

function ProfileInfo(props) {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div className="profile__container">
            <picture className="profile__picture">
                <img className="profile__avatar" src={props.profile.photos.large} />
            </picture>
            <div className="profile__text">
                <h1 className="profile__name">{props.profile.fullName}</h1>
                <p className="profile__about">{props.profile.aboutMe}</p>
            </div>
        </div>
    )
}

export default ProfileInfo;