import { NavLink } from 'react-router-dom';
import Preloader from '../Preloader'

function ProfileInfo(props) {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div className="profile__container">
            <picture className="profile__avatar-container">
                <source srcSet={props.profile.photos.small} media="(max-width: 535px)" />
                <img className="profile__avatar" src={props.profile.photos.large} />
            </picture>
            <div className="profile__text">
                <h1 className="profile__name">{props.profile.fullName}</h1>
                <p className="profile__about">{props.profile.aboutMe}</p>
                {/* <a className="" href={props.profile.contacts.vk} target="_blank">
                    <p className="profile__contacts">{props.profile.contacts.vk}</p>
                </a> */}
            </div>
        </div>
    )
}

export default ProfileInfo;