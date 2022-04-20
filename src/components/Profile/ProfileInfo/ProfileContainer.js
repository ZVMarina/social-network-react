import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import {
    getProfileInfoThunkCreator,
    getStatusThunkCreator,
    updateStatusThunkCreator
} from '../../../redux/profileReducer'
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import { Navigate } from 'react-router-dom';
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import { compose } from 'redux';

class ProfileContainer extends React.Component {

    componentDidMount = () => {
        const userId = this.props.router.params.userId ?? this.props.myId;

        this.props.getProfileInfo(userId);
        this.props.getUserStatus(userId);
    }

    render() {
        if (!this.props.isAuth) {
            return <Navigate to={'/login'} />
        }

        return (
            <Profile {...this.props}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus} />
        )
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    myId: state.auth.id,
    status: state.profilePage.status,
})

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

export default compose(
    connect(mapStateToProps, {
        getProfileInfo: getProfileInfoThunkCreator,
        getUserStatus: getStatusThunkCreator,
        updateStatus: updateStatusThunkCreator
    }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)