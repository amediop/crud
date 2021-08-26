import logo from './logo.svg';
import './App.css';
import './Ajout.css';
import axios from  'axios'
import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Select } from 'antd';

const apiUrl = `https://phonebook-api-242.herokuapp.com/api/contact`;

function Ajout() {
     const { Option } = Select;
     const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
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
         wrapperCol: { offset: 8, span: 16 },
      };
 
  

    return (
       <div className="App">
             <h1>Remplir e formulaire</h1>
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
  
      </div>
    );
 }

export default Ajout;