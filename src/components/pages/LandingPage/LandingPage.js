import React /*{ useState }*/ from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import ProtectedRoute from '../../utils/ProtectedRoute'

import ProfilePage from '../ProfilePage/ProfilePage'

import './LandingPage.css';

import {
  Layout,
  Input,
  Avatar
} from 'antd'
import 'antd/dist/antd.css';

const { Header, Content, Footer } = Layout

const LandingPage = () => {

  return (
    <div className="App">
      <Router>
        <Layout>
          <Header className='main-header'>
            <div className='header' style={{ display: 'flex' }}>
              <div style={{ margin: '0 10px' }}>
                <img className='logo' src={require('../../../assets/shophero.png')} alt='logo' />
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
            <h1>{process.env.REACT_APP_API_HOST}</h1>
            <Switch>
              <ProtectedRoute isAllowed={true} exact path="/profile-page" render={(props) => <ProfilePage {...props} />} />
            </Switch>
          </Content>
          <Footer className='main-footer'>
            <h1>Footer</h1>
          </Footer>
        </Layout>
      </Router>
    </div>
  );
}

export default LandingPage;
