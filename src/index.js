import React from 'react';
import ReactDOM from 'react-dom';
import { /*Route,*/ Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import ProtectedRoute from './components/utils/ProtectedRoute'

import './index.css';

import LandingPage from './components/pages/LandingPage/LandingPage';
import ProfilePage from './components/pages/ProfilePage/ProfilePage'

import {
  Layout,
  Input,
  Avatar
} from 'antd'
import 'antd/dist/antd.css';

const { Header, Content, Footer } = Layout

const App = () => {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Header className='main-header'>
            <div className='header' style={{ display: 'flex' }}>
              <div style={{ margin: '0 10px' }}>
                <Link to='/landing-page'>
                  <img className='logo' src={require('./assets/shophero.png')} alt='logo' />
                </Link>
              </div>
              <div style={{ margin: '0 10px' }}>
                <Input className='search' placeholder="Search in MyECommerce" disabled={true} />
              </div>
              <div>
                <Link to='/profile-page'>
                  <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>U</Avatar>
                </Link>
              </div>
            </div>
          </Header>
          <Content className='main-content'>
            <Switch>
              <ProtectedRoute isAllowed={true} exact path="/landing-page" render={(props) => <LandingPage {...props} />} />
              <ProtectedRoute isAllowed={true} exact path="/profile-page" render={(props) => <ProfilePage {...props} />} />
            </Switch>
          </Content>
          <Footer className='main-footer'>
            <h1>Footer</h1>
          </Footer>
        </Layout>
      </Router>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
