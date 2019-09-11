import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './LandingPage.css';
import 'antd/dist/antd.css';

import Slider from "react-slick";

import LoginModal from '../entry/LoginPage/LoginModal';
import RegisterModal from '../entry/RegisterPage/RegisterModal'

import {
  Layout,
  Input,
  Divider,
  Carousel,
  Icon,
  Badge
} from 'antd'

const { Header, Content, Footer } = Layout

const LandingPage = () => {

  const [loginModalVisible, setLoginModalVisible] = useState(false)
  const [registerModalVisible, setRegisterModalVisible] = useState(false)

  const [isLogin, setIsLogin] = useState(false)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <div>
      {/* <h1>
        {process.env.REACT_APP_API_HOST}
      </h1> */}
      <Layout>
        <Header className='main-header'>
          {/* <div className='header'> */}

          <div className='header'>
            <div style={{ display: 'flex' }}>
              <div className='logo'>
                <Link to='/landing-page'>
                  <img className='logo' src={require('../../../assets/shophero.png')} alt='logo' />
                </Link>
              </div>
              <div className='search-bar'>
                <Input className='search' placeholder="Search in MyECommerce" disabled={true} />
              </div>
            </div>
            <div>
              <div className='navigation-container' style={{ display: 'flex' }}>
                {isLogin && <><div>
                  <Badge count={5}>
                    <Icon type="shopping-cart" style={{ fontSize: 25, color: 'white' }} />
                  </Badge>
                </div>
                  <div>
                    <Badge count={5} offset={[-12, 0]}>
                      <Icon type="bell" style={{ fontSize: 25, color: 'white' }} />
                    </Badge>
                  </div></>}
                <div>
                  <Link className='entry' to='#' onClick={() => {
                    setRegisterModalVisible(true)
                  }}>
                    Sign Up
                    </Link>
                  <Divider type="vertical" />
                  <Link className='entry' to='#' onClick={() => {
                    setLoginModalVisible(true)
                  }}>
                    Login
                    </Link>
                </div>
              </div>
            </div>
          </div>
          <div>
            <LoginModal
              loginModalVisible={loginModalVisible}
              setLoginModalVisible={setLoginModalVisible}
              setIsLogin={setIsLogin}
            />
            <RegisterModal
              registerModalVisible={registerModalVisible}
              setRegisterModalVisible={setRegisterModalVisible}
            />
          </div>
        </Header>
        <Content className='main-content'>
          <div style={{ padding: '20px 20px' }}>
            asdljajlsdhlja
            {/* <Carousel autoplay style={{ zIndex: 0 }}>
              <div>
                <h3>1</h3>
              </div>
              <div>
                <h3>2</h3>
              </div>
              <div>
                <h3>3</h3>
              </div>
              <div>
                <h3>4</h3>
              </div>
            </Carousel> */}
            {/* <Slider {...settings}>
              <div>
                <h3>1</h3>
              </div>
              <div>
                <h3>2</h3>
              </div>
              <div>
                <h3>3</h3>
              </div>
              <div>
                <h3>4</h3>
              </div>
              <div>
                <h3>5</h3>
              </div>
              <div>
                <h3>6</h3>
              </div>
            </Slider> */}
          </div>
        </Content>
        <Footer className='main-footer'>
          <h1>Footer</h1>
        </Footer>
      </Layout>
    </div>
  )
}

export default LandingPage;
