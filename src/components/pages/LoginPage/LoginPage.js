import React /*{ useState }*/ from 'react';
import './LoginPage.css';

import {
  Layout,
  Input,
  Button,
  Icon,
  Form,
  Checkbox
} from 'antd'
import 'antd/dist/antd.css';

const { Header, Content, Footer } = Layout

const LoginPage = () => {
  return (
    <div className="model">
      <Form className="login-form">
        <Form.Item>
          <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username"/>
        </Form.Item>
        <Form.Item>
          <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"/>
        </Form.Item>
        <Form.Item>
          ( <Checkbox>Remember me</Checkbox>)
          <div style={{float: "right"}}>
            <a className="login-form-forgot" href=""> Forgot password</a>
          </div>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
        </Form.Item>
        <Form.Item>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
    </div>
  );
}
export default LoginPage;