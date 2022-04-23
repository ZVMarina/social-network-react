import React from "react";
import Header from "./Header";
import { logoutThunkCreator } from '../../redux/authReducer';
import { connect } from 'react-redux';
import { compose } from "redux";

class HeaderContainer extends React.Component {
    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    myId: state.auth.id,
    login: state.auth.login,
});

export default compose(
    connect(mapStateToProps, { logout: logoutThunkCreator })
)(HeaderContainer)