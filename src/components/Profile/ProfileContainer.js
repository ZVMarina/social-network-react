import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getProfileInfoThunkCreator } from '../../redux/profileReducer'
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import { Navigate } from 'react-router-dom';
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {

    componentDidMount = () => {
        const userId = this.props.router.params.userId;

        this.props.getProfileInfo(userId);
    }

    render() {
        if (!this.props.isAuth) {
            return <Navigate to={'/login'} />
        }

        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
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

const AuthRedirectComponent = withAuthRedirect(ProfileContainer);

export default connect(mapStateToProps, { getProfileInfo: getProfileInfoThunkCreator })(withRouter(AuthRedirectComponent));

/* const ProfileURLMatch = (props) => {
    const match = useMatch('/profile/:userId/');
    return <ProfileContainer {...props} match={match} />;
}

let AuthRedirectContainer = withAuthRedirect(ProfileURLMatch); // AuthRedirectComponent

export default connect(mapStateToProps, { getUserProfile })(AuthRedirectContainer); */