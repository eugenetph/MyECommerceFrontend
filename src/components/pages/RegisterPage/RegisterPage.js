import React /*{ useState }*/ from 'react';
import './RegisterPage.css';

import {
    Form,
    Input,
    Tooltip,
    Icon,
    Cascader,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    AutoComplete,
    Layout
} from 'antd'
import 'antd/dist/antd.css';



const { Header, Content, Footer } = Layout
const InputGroup = Input.Group;
const RegisterPage = () => {
  return (
    <div className="model">
        <h1>Register!</h1>
        <InputGroup compact>
          <Input style={{ width: '60%' }} placeholder="First Name"/>
          <Input style={{ width: '40%' }} placeholder="Last Name"/>
        </InputGroup>
        Email:
        <Input/>
        <InputGroup compact className="inputbox">
          <Input style={{ width: '50%'}} type="number" placeholder="Mobile"/>
          <Input style={{ width: '50%' }} type="date" placeholder="Date of Birth"/>
        </InputGroup>
        Username:
        <Input/>
        Password:
        <Input type="password"/>
        Re-Enter Password:
        <Input type="password"/>
        <button>Register!</button>
        
    </div>
  );
}
export default RegisterPage;