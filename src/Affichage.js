import logo from './logo.svg';
import './App.css';
import Modif from './Modif'
import { Table ,Space} from 'antd';
import axios from  'axios'
import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
  import { Layout, Menu, Breadcrumb } from 'antd';
const apiUrl = `https://phonebook-api-242.herokuapp.com/api/contact`;

function Affichage() {   


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

<a > <Link to={{pathname: `/Modif/${record.id}`}}>Modifier</Link> </a>
      
</Space>
      
      
    },
  ]
  

  
  return (
    <div className="App">
     <h1>Liste des personnes</h1>
   
     <Table
    columns={columns}
    dataSource={ repos}
  />

  
    </div>
  );
}

export default Affichage;