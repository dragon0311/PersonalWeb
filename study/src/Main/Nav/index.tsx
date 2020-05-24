import React, { Component } from 'react';
import {Tabs} from 'antd';
import {Link} from 'react-router-dom'
const {TabPane} = Tabs;

class Nav extends Component {
  render() {
    return (
      <div>
        <Tabs defaultActiveKey="1">
          <TabPane tab={<Link to="/video">视频</Link>} key="1"/>
          <TabPane tab={<Link to="/homework">作业</Link>} key="2"/>
          <TabPane tab={<Link to="/signup">登录</Link>} key="3"/>
          <TabPane tab={<Link to="/register">注册</Link>} key="4"/>
        </Tabs>
      </div>
    );
  }
}

export default Nav;