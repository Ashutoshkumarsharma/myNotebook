
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      localStorage.setItem('token', json.authtoken);
      props.showAlert('Logged in Successfully ', 'success');
      navigate('/');
    } else {
      props.showAlert('Invalid Credentials', 'danger');
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Welcome to iNotebook</h2>
        <h6 className="login-title-1">Login To Continue iNotebook</h6>
        <p className="login-subtitle">Securely access your notes by logging in</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              className="form-control"
              value={credentials.email}
              id="email"
              onChange={onChange}
              name="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              value={credentials.password}
              id="password"
              onChange={onChange}
              name="password"
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="login-btn">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;