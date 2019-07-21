import React /*{ useState }*/ from 'react';
import './LoginPage.css';


import {
  Layout,
  Input,
  Button,
  Icon
} from 'antd'
import 'antd/dist/antd.css';

const { Header, Content, Footer } = Layout

const LoginPage = () => {
  return (
    
    <div>
      <Layout>
        <Header className='main-header'>
          <div className='header'>
            <div>
              <img className='logo' src={require('../../../assets/logo.png')} alt='logo' />
            </div>
            <div style={{ margin: '0 10px'}}>
              <Input className='search' placeholder="Search in MyECommerce" disabled={true} />
            </div>
          </div>
        </Header>
        <Content className='main-content'>
        <div style={{ width: '30%'}}>
            Login:
          <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Username"
          />
          <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Password" type="Password"
          />
          </div>
        </Content>
        <Footer className='main-footer'>
          <h1>Footer</h1>
        </Footer>
      </Layout>
    </div>
  );
}

export default LoginPage;
