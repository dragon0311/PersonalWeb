import React, { Component } from 'react';
import {Tabs} from 'antd';
import {Link} from 'react-router-dom'
import styled from 'styled-components';
const {TabPane} = Tabs;

const TopBar = styled.div`
  height: 48px;
  background: #ffffff;
`

const Title = styled.div`
  float: left;
  margin-left: 48px;
  width: 178px;
  height: 48px;
  color: #212121;
  font-family: "Segoe UI";
  font-size: 36px;
  font-weight: 700;
  line-height: 48px;
  display: inline-block;
`

const XTabs = styled(Tabs)`
  float: left;
  display: 'inline-block';
  .ant-tabs{
    color: #212121;
    height: 48px;
  }
`

class Nav extends Component {
  render() {
    return (
      <TopBar>
        <Title>WallHome</Title>
        <div>
          <XTabs defaultActiveKey="1">
            <TabPane tab={<Link to="/computerW">电脑壁纸</Link>} key="1"/>
            <TabPane tab={<Link to="/phoneW">手机壁纸</Link>} key="2"/>
            <TabPane tab={<Link to="/signin">登录</Link>} key="3"/>
            <TabPane tab={<Link to="/signup">注册</Link>} key="4"/>
          </XTabs>
        </div>
      </TopBar>
    );
  }
}

export default Nav;