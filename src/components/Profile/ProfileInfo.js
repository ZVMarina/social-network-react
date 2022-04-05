function ProfileInfo(props) {
    return (
        <div className="profile__container">
            <picture className="profile__picture">
                <img className="profile__avatar" src={props.url} />
            </picture>
            <div className="profile__text">
                <h1 className="profile__name">{props.name}</h1>
                <p className="profile__about">{props.about}</p>
            </div>
        </div>
    )
}

export default ProfileInfo;