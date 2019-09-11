import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import ProtectedRoute from './components/utils/ProtectedRoute'

import './index.css';

import LandingPage from './components/pages/LandingPage/LandingPage';
import ProfilePage from './components/pages/LandingPage/ProfilePage/ProfilePage'

// import {
//   Layout,
// } from 'antd'
import 'antd/dist/antd.css';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <ProtectedRoute isAllowed={true} exact path="/landing-page" render={(props) => <LandingPage {...props} />} />
          <ProtectedRoute isAllowed={true} exact path="/profile-page" render={(props) => <ProfilePage {...props} />} />
          {/* <ProtectedRoute isAllowed={true} exact path="/login-page" render={(props) => <LoginPage {...props} />} /> */}
        </Switch>
      </Router>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
