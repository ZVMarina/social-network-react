import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import '../index.css';
import Navbar from './Navbar/Navbar';
import DialogsContainer from './Dialogs/DialogsContainer';
import UsersContainer from './Users/UsersContainer';
import ProfileContainer from './Profile/ProfileContainer';
import HeaderContainer from './Header/HeaderContainer';
import Login from './Login/Login';
import { initializedAppTC } from '../redux/appReducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Preloader from './Preloader';
import withRouter from '../hoc/withRouter';

const App = (props) => {
  useEffect(() => {
    props.initializedApp();
  })

  if (!props.initialized) {
    return <Preloader />
  }

  return (
    <div className="App">
      <div className="page">
        <HeaderContainer />
        <Navbar myId={props.myId} />
        <main className="main">
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path="/profile/:userId" element={<ProfileContainer />} />
            <Route path="/dialogs/*" element={<DialogsContainer props={props.store} />} />
            <Route path="/users" element={<UsersContainer />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
    myId: state.auth.id,
  }
}

export default compose(
  /* withRouter, */
  connect(mapStateToProps, { initializedApp: initializedAppTC }))
  (App)