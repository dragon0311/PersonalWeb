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

const XTabsDiv = styled.div`
  float: left;
  margin-left: 24px;
  display: 'inline-block';
  font-family: "Microsoft YaHei";
  font-size: 20px;
  font-weight: 700;
  &&.ant-tabs{
    height: 48px;
  }
  .ant-tabs-nav .ant-tabs-tab{
    font-weight: 700;
  }
  
`

class Nav extends Component {
  render() {
    return (
      <TopBar>
        <Title>WallHome</Title>
        <XTabsDiv>
          <Tabs defaultActiveKey="1">
            <TabPane tab={<Link to="/home">主页</Link>} key="1"/>
            <TabPane tab={<Link to="/computerW">桌面壁纸</Link>} key="2"/>
            <TabPane tab={<Link to="/phoneW">手机壁纸</Link>} key="3"/>
            <TabPane tab={<Link to="/signin">登录</Link>} key="4"/>
            <TabPane tab={<Link to="/signup">注册</Link>} key="5"/>
          </Tabs>
        </XTabsDiv>
      </TopBar>
    );
  }
}

export default Nav;