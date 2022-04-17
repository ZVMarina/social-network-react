import * as axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { setProfileInfo } from '../../redux/profileReducer'
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import { profileApi } from '../../api/api';

class ProfileContainer extends React.Component {

    componentDidMount = () => {
        let userId = this.props.router.params.userId;

        profileApi.getProfileInfo(userId)
            .then(data => this.props.setProfileInfo(data))
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile
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

export default connect(mapStateToProps, { setProfileInfo })(withRouter(ProfileContainer));