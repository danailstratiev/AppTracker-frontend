import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Form, Input, Button, Checkbox, Row } from 'antd';
import LoginForm from './components/LoginForm';
import '../src/index.css';
import Navigation from "../src/containers/Menu/Navigation";
import ApplicationsStatus from './components/ApplicationsStatus';

function App() {
  const adminUser = {
    userName: 'admin',
    email: "admin@admin.com",
    password: "admin123"
  }

  const { user, setUser } = useState({ name: 'admin', email: 'admin@admin.com', password: 'admin123' });
  const [error, setError] = useState('');
  
  const Login = details => {
    console.log('details', details);
  }
  
  const Logout = () => {
    console.log('Logout');
  }
  return (
    // <div className="app">
    //   {(user && user.email !== '') ? (
    //     <div className="welcome">
    //       <h2>Welcome <span>{user.name}</span></h2>
    //       <Button>Logout</Button>
    //     </div>
    //   ): (
    //     <Row>
    //       <LoginForm />
    //     </Row>
    //   )}
    // </div>
    <div className="app">
      <Navigation/>
      <div className="welcome">
         <h2>Hello there!</h2>
         <Button>Logout</Button>
       </div>
   </div>
      // {(user && user.email !== '') ? (
      //   <div className="welcome">
      //     <h2>Welcome <span>{user.name}</span></h2>
      //     <Button>Logout</Button>
      //   </div>
      // ): (
      //   <Row>
      //     {Login()}
      //     <ApplicationsStatus />
      //   </Row>
      // )}
  );
}

export default App;
