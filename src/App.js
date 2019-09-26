import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { HashRouter as Router } from 'react-router-dom';
// import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {Provider} from 'react-redux';
import {store} from './store';
  
import Routes from './routes';

 class App extends React.Component{
   render(){
     return(

       <Provider store={store}>
       <Router>
        <Routes />
        </Router>
       </Provider>
     
     )
   }
 }



export default App;
