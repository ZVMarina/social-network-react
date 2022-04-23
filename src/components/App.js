import { Routes, Route } from 'react-router-dom';
import '../index.css';
import Navbar from './Navbar/Navbar';
import News from './News/News';
import Music from './Music/Music';
import Settings from './Settings/Settings';
import DialogsContainer from './Dialogs/DialogsContainer';
import UsersContainer from './Users/UsersContainer';
import ProfileContainer from './Profile/ProfileInfo/ProfileContainer';
import HeaderContainer from './Header/HeaderContainer';
import Login from './Login/Login';
import React from 'react';
import { initializedAppTC } from '../redux/appReducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Preloader from './Preloader';
import withRouter from '../hoc/withRouter';

class App extends React.Component {
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
              <Route path="/profile/:userId" element={<ProfileContainer />} />
              <Route path='/profile/' element={<ProfileContainer />} />
              <Route path="/dialogs*" element={<DialogsContainer props={this.props.store} />} />
              <Route path="/users" element={<UsersContainer />} />
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
  connect(mapStateToProps, { initializedApp: initializedAppTC }),
  withRouter)
  (App)