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

// function App() {
//    return (
//     <div className="App">
//       <header className="App-header">
//         <p>Login</p>
//         <form>
//   <label>
//     UserName:
//     <input type="text" name="name" />
//     <br />
//     Password:
//     <input type="text" name="name" />
//   </label>
//   <br />
//   {/* <input type="submit" value="Login" /> */}
//     <button >
//       Login
//     </button>
//   </form>
//       </header>
//     </div>
//   );
// }

export default App;
