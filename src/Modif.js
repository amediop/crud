import logo from './logo.svg';
import './App.css';
import './Ajout.css';
import axios from  'axios'
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Select } from 'antd';
import {
    useParams,useHistory
  } from "react-router-dom";

const apiUrl = `https://phonebook-api-242.herokuapp.com/api/contact/`;

function Modif() {
  let history = useHistory();
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

    axios.put(`https://phonebook-api-242.herokuapp.com/api/contact/${params.id}`,values)
    .then(res => {
      console.log(res);
      console.log(res.data);
      history.push("/Affichage1");
    })
};


 
  

  return (
    <div className="App">
         <h2>Modifier votre profil</h2>
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
  
    </div>
  );
}

export default Modif;