import { Routes, Route } from 'react-router-dom';
import '../index.css';
import Navbar from './Navbar/Navbar';
import DialogsContainer from './Dialogs/DialogsContainer';
import HeaderContainer from './Header/HeaderContainer';
import Login from './Login/Login';
import React from 'react';
import { initializedAppTC } from '../redux/appReducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Preloader from './Preloader';
import withRouter from '../hoc/withRouter';
import ProfileContainerHooks from './Profile/ProfileInfo/ProfileContainerHooks';
import UsersContainerHooks from './Users/UsersContainerHooks';

class AppClass extends React.Component {
  componentDidMount = () => {
    this.props.initializedApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <div className="App">
        <div className="page">
          <HeaderContainer />
          <Navbar />
          <main className="main">
            <Routes>
              <Route path='/login' element={<Login />} />
              <Route path="/profile/:userId" element={<ProfileContainerHooks />} />
              <Route path="/dialogs/*" element={<DialogsContainer props={this.props.store} />} />
              <Route path="/users" element={<UsersContainerHooks />} />
            </Routes>
          </main>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps, { initializedApp: initializedAppTC }))
  (AppClass)