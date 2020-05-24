import React, { Component } from 'react';
import { Input, Button } from 'antd';
import styled from 'styled-components'

const XInput = styled(Input)`
  display: block;
  width: 200px;
  margin: 8px;
`;

const C = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;  
  justify-content: center;
`;

class Login extends Component {
  render() {
    return (
      <C>
        <div>
          <h1>登录</h1>
          <XInput className="username" placeholder="用户名"/>
          <XInput className="password" placeholder="密码"/>
          <Button type="primary" >登录</Button>
        </div>
      </C>
    );
  }
}

export default Login;