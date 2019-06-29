import React /*{ useState }*/ from 'react';
import './LandingPage.css';

import {
  Layout,
  Input
} from 'antd'
import 'antd/dist/antd.css';

const { Header, Content, Footer } = Layout

const LandingPage = () => {

  return (
    <div className="App">
      <Layout>
        <Header className='main-header'>
          <div className='header'>
            <div style={{ margin: '0 10px'}}>
              <img className='logo' src={require('../../../assets/shophero.png')} alt='logo' />
            </div>
            <div style={{ margin: '0 10px'}}>
              <Input className='search' placeholder="Search in MyECommerce" disabled={true} />
            </div>
          </div>
        </Header>
        <Content className='main-content'>
          <h1>{process.env.REACT_APP_API_HOST}</h1>
        </Content>
        <Footer className='main-footer'>
          <h1>Footer</h1>
        </Footer>
      </Layout>
    </div>
  );
}

export default LandingPage;
