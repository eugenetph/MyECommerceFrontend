import React /*{ useState }*/ from 'react';
import './RegisterModal.css';

import {
  // Form,
  Modal
} from 'antd'
import 'antd/dist/antd.css'

const RegisterPage = ({ registerModalVisible, setRegisterModalVisible }) => {

  // const handleOk = e => {
  //   console.log(e);
  //   setRegisterModalVisible(false)
  // };

  const handleCancel = e => {
    console.log(e);
    setRegisterModalVisible(false)
  };

  return (
    <div className="register-model">
      <Modal
        title="Sign up"
        visible={registerModalVisible}
        onCancel={handleCancel}
        destroyOnClose
        footer={null}
      >
        {/* TODO */}
      </Modal>
    </div>
  );
}
export default RegisterPage;

{/* <h1>Register!</h1>
        <InputGroup compact>
          <Input style={{ width: '60%' }} placeholder="First Name" />
          <Input style={{ width: '40%' }} placeholder="Last Name" />
        </InputGroup>
        Email:
        <Input />
        <InputGroup compact className="inputbox">
          <Input style={{ width: '50%' }} type="number" placeholder="Mobile" />
          <Input style={{ width: '50%' }} type="date" placeholder="Date of Birth" />
        </InputGroup>
        Username:
        <Input />
        Password:
        <Input type="password" />
        Re-Enter Password:
        <Input type="password" />
        <button>Register!</button> */}