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
const apiUrl = `https://phonebook-api-242.herokuapp.com/api/contact/`;

function Modif1() {
    const { SubMenu } = Menu;
    const { Header, Content, Footer, Sider } = Layout;
    let  params  = useParams();  
   
    const [ form ] = Form.useForm()
    const [repo, setRepo] = useState([]);
    const [repos, setRepos] = useState([]);

const { Option } = Select;
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };


  const affiche=()=>{
       axios.get(apiUrl+params.id).then((repos) => {
       setRepo(repos.data)
       form.setFieldsValue(repos.data)
        });

  }
  const affiche1=()=>{
    axios.get(apiUrl).then((repos) => {
        const allRepos = repos.data;
        setRepos(allRepos);  
        });

  }
   useEffect(() => {
    affiche()
   }, []);

  const onFinish = (values ) => {
  console.log(values)
  };

  const onReset = () => {
    form.resetFields();
  };

  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };
  const Update = (values ) => {
    console.log(values)
  
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
        
<Form {...layout} form={form} name="control-hooks" onFinish={Update}>
      <Form.Item name="lastname" label="nom" value="" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="firstname" label="prenom" value="" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="phonenumber" label="Numero" value="" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
    
      <Form.Item {...tailLayout}>
       
        <Button type="primary" htmlType="submit">
         Modifier
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

export default Modif1;