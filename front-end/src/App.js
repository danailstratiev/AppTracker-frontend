import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Form, Input, Button, Checkbox, Row } from 'antd';
import LoginForm from './components/LoginForm';
import '../src/index.css';

function App() {
  const adminUser = {
    userName: 'admin',
    email: "admin@admin.com",
    password: "admin123"
  }

  const { user, setUser } = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  
  const Login = details => {
    console.log(details);
  }
  
  const Logout = () => {
    console.log('Logout');
  }
  return (
    <div className="app">
      {(user && user.email !== '') ? (
        <div className="welcome">
          <h2>Welcome <span>{user.name}</span></h2>
          <Button>Logout</Button>
        </div>
      ): (
        <Row>
          <LoginForm />
        </Row>
      )}
    </div>
  );
}

export default App;
