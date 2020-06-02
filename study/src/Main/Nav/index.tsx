import React, { Component } from 'react';
import {Tabs} from 'antd';
import {Link} from 'react-router-dom'
const {TabPane} = Tabs;

class Nav extends Component {
  render() {
    return (
      <div>
        <Tabs defaultActiveKey="1">
          <TabPane tab={<Link to="/computerW">电脑壁纸</Link>} key="1"/>
          <TabPane tab={<Link to="/phoneW">手机壁纸</Link>} key="2"/>
          <TabPane tab={<Link to="/signin">登录</Link>} key="3"/>
          <TabPane tab={<Link to="/signup">注册</Link>} key="4"/>
        </Tabs>
      </div>
    );
  }
}

export default Nav;