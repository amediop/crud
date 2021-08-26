import logo from './logo.svg';
import './App.css';
import Affichage1 from './Affichage1'
import Body from './Body.js'
import Ajout from './Ajout.js'
import Affichage from './Affichage'
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Layout, Menu, Breadcrumb } from 'antd';
import Modif from './Modif';
import Modif1 from './Modif1';

function App() {
  const { Header, Content, Footer } = Layout;
  return (
    
    <Router>
    <div>
     

     
      <Switch>

        <Route path="/Ajout">
         <Ajout />
        </Route>
        <Route path="/Affichage1">
          <Affichage1 />
        </Route>

        <Route path="/Affichage">
          <Affichage />
        </Route>
       
        <Route path="/Modif1/:id">
         < Modif />
        </Route>
        <Route path="/Body">
         < Body />
        </Route>
       </Switch>
  
    </div> 
   </Router>
  );
}

export default App;