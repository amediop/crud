import logo from './logo.svg';
import './App.css';
import './Header.css';
import React, { useEffect, useState } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

function Tete() {   

    const { SubMenu } = Menu;
    const { Header, Content, Footer, Sider } = Layout;

  
  return (
   
     <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">Ajout </Menu.Item>
        <Menu.Item key="2">Liste</Menu.Item>
       
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      
      <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
        <Sider className="site-layout-background" width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
          >
            <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
              <Menu.Item key="1">Ajout Personne</Menu.Item>
              <Menu.Item key="2">Ajout Personne</Menu.Item>
             
            </SubMenu>
            
          </Menu>
        </Sider>
       
      </Layout>
    </Content>
   
  </Layout>
   
  
   
  );
}

export default tete;