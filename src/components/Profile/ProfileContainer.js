import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import {
    getProfileInfoThunkCreator,
    getStatusThunkCreator,
    saveAvatarThunkCreator,
    saveProfileThunkCreator,
    updateStatusThunkCreator
} from '../../redux/profileReducer.ts'
import { Navigate, useParams } from 'react-router-dom';
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from 'redux';

const ProfileContainer = (
    { getProfileInfo, getUserStatus, isAuth, profile, status, updateStatus, myId, saveAvatar, saveProfile }
) => {
    const { userId } = useParams();

    useEffect(() => {
        getProfileInfo(userId);
        getUserStatus(userId);

    }, [userId])

    if (!isAuth) {
        return <Navigate to={'/login'} />
    }

    return (
        <Profile
            profile={profile}
            status={status}
            updateStatus={updateStatus}
            myId={myId}
            saveAvatar={saveAvatar}
            saveProfile={saveProfile}
        />
    )
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    myId: state.auth.id,
})

export default compose(
    connect(mapStateToProps, {
        getProfileInfo: getProfileInfoThunkCreator,
        getUserStatus: getStatusThunkCreator,
        updateStatus: updateStatusThunkCreator,
        saveAvatar: saveAvatarThunkCreator,
        saveProfile: saveProfileThunkCreator,
    }),
    withAuthRedirect
)(ProfileContainer)