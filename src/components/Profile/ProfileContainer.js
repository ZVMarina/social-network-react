import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import {
    getProfileInfoThunkCreator,
    getStatusThunkCreator,
    saveAvatarThunkCreator,
    updateStatusThunkCreator
} from '../../redux/profileReducer'
import { Navigate, useParams } from 'react-router-dom';
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from 'redux';

const ProfileContainer = ({ getProfileInfo, getUserStatus, isAuth, profile, status, updateStatus, myId, saveAvatar }) => {
    const params = useParams();

    useEffect(() => {
        getProfileInfo(params.userId);
        getUserStatus(params.userId);

    }, [params.userId])

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
    }),
    withAuthRedirect
)(ProfileContainer)