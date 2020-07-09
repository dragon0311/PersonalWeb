import React from 'react'
import {Form, Input, Button, Checkbox, message, Modal} from 'antd'
import styled from 'styled-components';
import qs from 'querystring';
import * as actions from '../../Actions';
import { GlobalStateProps } from '../../Reducers';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const C = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const XInput = styled(Input)`
  width: 200px;
  margin-left: 14px;
`;

interface IProps {
  signInVisible: boolean;
  switchVisibleActions: any;
}

interface IState {
  username: string;
  password: string;
}

class SignIn extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      username: '',
      password: '',
    }
  }

  render() {
    console.log('this.props.signInVisible', this.props.signInVisible);
    return (
      <Modal
        visible={this.props.signInVisible}
        onCancel={() => {this.props.switchVisibleActions.signIp(false)}}
        footer={null}
      >
        <C>
          <div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
              <h1>登录</h1>
            </div>
            <Form
              // {...layout}
              style={{ width: '300px' }}
              name="SignUpForm"
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
                  onChange={(e: any) => {
                    this.setState({
                      username: e.target.value,
                    });
                  }} />
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
              >
                <XInput.Password
                  value={this.state.password}
                  onChange={(e: any) => {
                    this.setState({
                      password: e.target.value,
                    });
                  }}
                  style={{ width: '200px', marginLeft: '28px'}} />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  onClick={this.isSignedIn}>登录</Button>
              </Form.Item>
            </Form>
          </div>
        </C>
      </Modal>
    )
  }

  private onFinish = (values: any) => {
    console.log('Received values of form:', values);
  }

  private onLogin = () => {
    fetch('/user/sign-in', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        // "Accept": "application/json,text/plain,*/*"
      },
      body: qs.stringify({
        Username: this.state.username,
        Password: this.state.password,
      })
    }).then(res => {
      return res.json()
    }).then(data => {
      console.log(data);
      if(data.code) {
        message.error(data.message);
      } else {
        message.success('登录成功!');
      }
    })
  }

  private isSignedIn = () => {
    fetch('/user/is-signed-in', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        // "Accept": "application/json,text/plain,*/*"
      },
      body: qs.stringify({
        Username: this.state.username,
        Password: this.state.password,
      })
    }).then(res => {
      return res.json();
    }).then(data => {
      console.log(data);
      if(data.code) {
        message.error(data.message);
      } else {
        this.onLogin();
      }
    })
  }
}

const mapStateToProps = (state: GlobalStateProps) => {
  console.log('222222', state, state.modalVisible);
  return {
    signInVisible: state.modalVisible.signIn
  };
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    switchVisibleActions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)