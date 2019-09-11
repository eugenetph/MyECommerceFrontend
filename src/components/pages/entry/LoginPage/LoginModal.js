import React /*{ useState }*/ from 'react';
import './LoginModal.css';

import {
  Modal,
  Input,
  Button,
  Icon,
  Form,
  Checkbox,
  Row,
  Col
} from 'antd'
import 'antd/dist/antd.css';

// const { Header, Content, Footer } = Layout

const LoginModal = ({ loginModalVisible, setLoginModalVisible, setIsLogin }) => {

  const handleOk = e => {
    console.log(e);
    setLoginModalVisible(false)
    setIsLogin(true)
  };

  const handleCancel = e => {
    console.log(e);
    setLoginModalVisible(false)
    setIsLogin(false)
  };

  return (
    <div className="login-modal">
      <Modal
        title="Login"
        visible={loginModalVisible}
        onCancel={handleCancel}
        destroyOnClose
        footer={null}
      >
        <Form className="login-form">
          <Form.Item>
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          </Form.Item>
          <Form.Item>
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Checkbox>Remember me</Checkbox>
            <div style={{ float: "right" }}>
              <a className="login-form-forgot" href=""> Forgot password</a>
            </div>
          </Form.Item>
          <Form.Item>
            <Row>
              <Col span={5} offset={13}>
                <div className='cancel-button'>
                  <Button onClick={handleCancel}>
                    Cancel
                  </Button>
                </div>
              </Col>
              <Col span={5} offset={1}>
                <div className='login-button'>
                  <Button type="primary" htmlType="submit" className="login-form-button" onClick={handleOk}>
                    Login
                  </Button>
                </div>
              </Col>
            </Row>
          </Form.Item>
          <Form.Item>
            Or <a href="#">Sign up!</a>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
export default LoginModal