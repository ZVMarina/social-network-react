import React from "react";
import Header from "./Header";
import * as axios from 'axios';
import { setAuthUserData } from '../../redux/authReducer';
import { connect } from 'react-redux';
import { headerApi } from "../../api/api";

class HeaderContainer extends React.Component {

    componentDidMount = () => {
        headerApi.getAuthInfo()
            .then(data => {
                if (data.resultCode === 0) {
                    const authInfo = data.data
                    this.props.setAuthUserData(authInfo.id, authInfo.email, authInfo.login);
                }
            })
    }

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);