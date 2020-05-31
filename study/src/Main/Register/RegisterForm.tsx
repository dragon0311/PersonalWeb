import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import styled from 'styled-components';
import qs from 'querystring';

const C = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const XInput = styled(Input)`
  width: 200px;
`;

// const layout = {
//   labelCol: { span: 8 },
//   wrapperCol: { span: 16},
// }

interface IProps {

}

interface IState {
  email: string;
  username: string;
  password: string;
  psdconfirm: string;
}

export default class RegisterForm extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      email: '',
      username: '',
      password: '',
      psdconfirm: '',
    }
  }
  render() {
    return (
      <C>
        <Form 
          // {...layout}
          style={{width: '300px'}}
          name="RegisterForm"
          onFinish={this.onFinish}
          scrollToFirstError
        >
            <Form.Item
            name="username"
            label="用户名"
            rules={[
              {
                required: true,
                message: '请输入用户名！',
                whitespace: true,
              }
            ]}
          >
            <XInput
              value={this.state.username} 
              onChange={(e: any)=>{
                this.setState({
                  username: e.target.value,
                });
              }}/>
          </Form.Item>
          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: "email",
                message: '邮箱地址无效!',
              },
              {
                required: true,
                message: '请输入邮箱地址！',
              }
            ]}
          >
            <XInput 
              value={this.state.email}
              onChange={(e: any)=>{
                this.setState({
                  email: e.target.value,
                });
              }}/>
          </Form.Item>
          <Form.Item
            name="password"
            label="密码"
            rules={[
              {
                required: true,
                message: '请输入密码！',
              }
            ]}
            hasFeedback
          >
            <XInput.Password 
              value={this.state.password} 
              onChange={(e: any)=>{
                this.setState({
                  password: e.target.value,
                });
              }}/>
          </Form.Item>
          <Form.Item
            name="psdConfirm"
            label="确认密码"
            dependencies={['password']}
            rules={[
              {
                required: true,
                message: '请再次输入密码！',
              },
              ({getFieldValue}) => ({
                validator(rule, value) {
                  if(!value || getFieldValue('password') === value) {
                    console.log(Promise.resolve());
                    return Promise.resolve();
                  }
                  console.log(Promise.reject('确认密码和密码不相同！'));
                  return Promise.reject('确认密码和密码不相同！');
                }
              })
            ]}
            
            hasFeedback
          >
            <XInput.Password 
              value={this.state.psdconfirm} 
              onChange={(e: any)=>{
                this.setState({
                  psdconfirm: e.target.value,
                });
              
              }}/>
          </Form.Item>
          <Form.Item>
            <Button 
              type="primary" 
              onClick={this.onSubmit}>提交</Button>
          </Form.Item>
        </Form>
      </C>
    )
  }

  private onFinish = (values: any) => {
    console.log('Received values of form:', values);
  } 

  private onSubmit = () => {
    fetch('http://127.0.0.1:8199/user/sign-up', {
      method:'POST',
      mode:'cors',
      headers:{
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        // "Accept": "application/json,text/plain,*/*"
      },
      body:qs.stringify({
        Username: this.state.username,
        Email: this.state.email,
        Password: this.state.password,
        Password2: this.state.psdconfirm,
      })
    }).then(res => {
      console.log('res.json', res.json());
    })
    .then(data => {
        console.log(data);
    })
  }
}
