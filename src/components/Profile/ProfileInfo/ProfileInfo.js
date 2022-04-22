import Preloader from '../../Preloader'
import photo from '../../../images/users/no-photo.png'
import ProfileStatus from './ProfileStatus';

function ProfileInfo(props) {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div className="profile__container">
            <picture className="profile__avatar-container">
                <source srcSet={props.profile.photos.small} media="(max-width: 535px)" />
                <img className="profile__avatar" src={props.profile.photos.large != null ? props.profile.photos.large : photo} />
            </picture>
            <div className="profile__text">
                <h1 className="profile__name">{props.profile.fullName}</h1>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
            </div>
        </div>
    )
}

export default ProfileInfo;