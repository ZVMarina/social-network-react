import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getProfileInfoThunkCreator } from '../../redux/profileReducer'
import {
    useLocation,
    useMatch,
    useNavigate,
    useParams,
} from "react-router-dom";
import { Navigate } from 'react-router-dom';
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from 'redux';

class ProfileContainer extends React.Component {

    componentDidMount = () => {
        const userId = this.props.router.params.userId;
        /* const userId = this.props.match.params.userId; */

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

/* const withRouter = (Component) =>{
    let RouterComponent = (props) => {
            const match = useMatch('/profile/:userId/');
            return <Component {...props} match={match}/>;
    }
    return RouterComponent;
} */

export default compose(
    connect(mapStateToProps, { getProfileInfo: getProfileInfoThunkCreator }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)