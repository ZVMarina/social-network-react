import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import '../index.css';
import Navbar from './Navbar/Navbar';
import DialogsContainer from './Dialogs/DialogsContainer';
import UsersContainer from './Users/UsersContainer';
import ProfileContainer from './Profile/ProfileContainer';
import HeaderContainer from './Header/HeaderContainer';
import Login from './Login/Login';
import { initializedAppTC } from '../redux/appReducer.ts';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Preloader from './Preloader';
import NotFoundPage from './NotFoundPage/NotFoundPage';

const App = ({ initializedApp, initialized, myId, store }) => {
  useEffect(() => {
    initializedApp();
  })

  if (!initialized) {
    return <Preloader className={'preloader_place_app'} />
  }

  return (
    <div className="app">
      <div className="page">
        <HeaderContainer />
        <Navbar myId={myId} />
        <main className="main">
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/login' element={<Login />} />
            <Route path="/profile/:userId" element={<ProfileContainer />} />
            <Route path="/dialogs/*" element={<DialogsContainer props={store} />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="*" element={<NotFoundPage />} />
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
  connect(mapStateToProps, { initializedApp: initializedAppTC }))
  (App)