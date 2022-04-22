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
import { getAuthInfoThunkCreator, logoutThunkCreator } from '../redux/authReducer';
import { connect } from 'react-redux';

class App extends React.Component {
  componentDidMount = () => {
    this.props.getAuthInfoThunk();
  }

  render() {
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
              {/* <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} /> */}
              <Route path="/users" element={<UsersContainer />} />
              {/* <Route path="/settings" element={<Settings />} /> */}
            </Routes>
          </main>
        </div>
      </div>
    );
  }
}

export default connect(null, { getAuthInfoThunk: getAuthInfoThunkCreator, logout: logoutThunkCreator })(App)