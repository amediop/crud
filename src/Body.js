import logo from './logo.svg';
import './App.css';
import './Ajout.css';
import './Header.css';
import React, { useEffect, useState } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { Form, Input, Button, Select } from 'antd';
import axios from  'axios'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
function Body() {   

    const { SubMenu } = Menu;
    const { Header, Content, Footer, Sider } = Layout;
    const { Option } = Select;
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
  };
  const [form] = Form.useForm();

  const onFinish = (values ) => {
    console.log(values);
    axios.post(`https://phonebook-api-242.herokuapp.com/api/contact` ,values)
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
  };

  const onReset = () => {
    form.resetFields();
  };

  const tailLayout = {
    wrapperCol: { offset: 8, span: 20 },
  };

  
  return (
   
     <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1"><Link to="/Body">Ajout</Link> </Menu.Item>
        <Menu.Item key="2"><Link to="/Affichage1">Affichage</Link></Menu.Item>
       
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
            <Menu.Item key="1"><Link to="/Body">Ajout</Link> </Menu.Item>
            <Menu.Item key="2"><Link to="/Affichage1">Affichage</Link></Menu.Item>
             
            </SubMenu>
            
          </Menu>
        </Sider>
        <Content style={{ padding: '0 24px', minHeight: 280 }}>
<h1> Remplir le formulaire</h1>
        <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
      <Form.Item name="lastname" label="nom" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="firstname" label="prenom" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="phonenumber" label="Numero" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
    
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>
  
      </Form.Item>
    </Form>
        </Content>
      </Layout>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Application crud phonebook</Footer>
  </Layout>
   
  
   
  );
}

export default Body;