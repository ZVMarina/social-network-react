import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import {
    getProfileInfoThunkCreator,
    getStatusThunkCreator,
    updateStatusThunkCreator
} from '../../../redux/profileReducer'
import { Navigate } from 'react-router-dom';
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import { compose } from 'redux';
import withRouter from '../../../hoc/withRouter';

const ProfileContainer = (props) => {
    useEffect(() => {
        const userId = props.router.params.userId ?? props.myId;

        props.getProfileInfo(userId);
        props.getUserStatus(userId);
    }, []);

    if (!props.isAuth) {
        return <Navigate to={'/login'} />
    }

    return (
        <Profile {...props}
            profile={props.profile}
            status={props.status}
            updateStatus={props.updateStatus}
        />
    )
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    myId: state.auth.id,
    status: state.profilePage.status,
})

export default compose(
    connect(mapStateToProps, {
        getProfileInfo: getProfileInfoThunkCreator,
        getUserStatus: getStatusThunkCreator,
        updateStatus: updateStatusThunkCreator
    }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)