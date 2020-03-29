import { Layout, Menu } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined
} from '@ant-design/icons';
import React, { useState } from 'react';
import Routes from '../configs/Routes';
import { BrowserRouter as Router, Link } from 'react-router-dom';

export default () => {
  const [collapsed, setCollapsed] = useState(false);

  const { Header, Sider, Content } = Layout;

  return (
    <Router>
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          style={{
            height: '100vh'
          }}>
          <div className='logo' />
          <Menu id='menu' theme='dark' mode='inline' defaultSelectedKeys={['1']}>
            <Menu.Item key='1'>
              <UserOutlined />
              <span>
                <Link to='/'>React Hooks Interval</Link>
              </span>
            </Menu.Item>
            <Menu.Item key='2'>
              <VideoCameraOutlined />
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key='3'>
              <UploadOutlined />
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className='site-layout'>
          <Header className='site-layout-background' style={{ padding: 0 }}>
            <div className='trigger' onClick={() => setCollapsed(collapsed => !collapsed)}>
              {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </div>
          </Header>
          <Content>
            <Routes />
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};
