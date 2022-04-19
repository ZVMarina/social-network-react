import React from "react";
import Header from "./Header";
import * as axios from 'axios';
import { getAuthInfoThunkCreator } from '../../redux/authReducer';
import { connect } from 'react-redux';
import { compose } from "redux";

class HeaderContainer extends React.Component {

    componentDidMount = () => {
        this.props.getAuthInfoThunk();
    }

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

export default compose(
    connect(mapStateToProps, { getAuthInfoThunk: getAuthInfoThunkCreator })
)(HeaderContainer)