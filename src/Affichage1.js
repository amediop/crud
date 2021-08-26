import logo from './logo.svg';
import './App.css';
import './Ajout.css';
import './Header.css';
import { Table ,Space} from 'antd';
import React, { useEffect, useState } from 'react';
import { Layout, Menu} from 'antd';
import { UserOutlined} from '@ant-design/icons';
import { Select } from 'antd';
import axios from  'axios'
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";
const apiUrl = `https://phonebook-api-242.herokuapp.com/api/contact`;

function Affichage1() {   

    const { SubMenu } = Menu;
    const { Header, Content, Footer, Sider } = Layout;
    const { Option } = Select;
    const [repos, setRepos] = useState([]);

    const affiche=()=>{
             axios.get(apiUrl).then((repos) => {
             const allRepos = repos.data;
             setRepos(allRepos);  
             });

         }

            useEffect(() => {
                 affiche()
            }, []);

    const Delete = (id ) => {
             console.log(id)
             axios.delete(`https://phonebook-api-242.herokuapp.com/api/contact/${id}`)
             .then(res => {
             console.log(res);
             console.log(res.data);
             affiche()
            })
         };

    const columns = [
        { title: 'Nom', dataIndex: 'firstname', key: 'firstname' },
        { title: 'Prenom', dataIndex: 'lastname', key: 'lastname' },
        { title: 'Numero', dataIndex: 'phonenumber', key: 'phonenumber' },
        {
          title: 'Action',
          dataIndex: '',
          key: 'id',
          render: (record) => 
         <Space size="middle">
              <a onClick={()=>Delete(record.id)}>Delete</a>

              <a > <Link to={{pathname: `/Modif1/${record.id}`}}>Modifier</Link> </a>

        </Space>


},
]


  
  return (
   
      <Layout>

         <Header className="header">
            <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1"><Link to="/Body">Ajout</Link> </Menu.Item>
           <Menu.Item key="2"><Link to="/Affichage1">liste</Link></Menu.Item>
       
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
                      <Menu.Item key="2"><Link to="/Body">Ajout</Link></Menu.Item>
                      <Menu.Item key="2"><Link to="/Affichage1">Affichage</Link></Menu.Item>
             
                  </SubMenu>
            
                 </Menu>
                 </Sider>

        <Content style={{ padding: '0 24px', minHeight: 280 }}>
             <h1>Liste des personnes</h1>
             <Table
                columns={columns}
                dataSource={ repos}
             />
        </Content>
        
      </Layout>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Application crud phonebook</Footer>
  </Layout>
   
  
   
  );
}

export default Affichage1;