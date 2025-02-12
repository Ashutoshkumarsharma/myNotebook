
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = (props) => {
  const [credentials, setCredentials] = useState({ name: '', email: '', password: '', cpassword: '' });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = credentials;

    const response = await fetch('http://localhost:5000/api/auth/createuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });

    const json = await response.json();
    // console.log(json);

    if (json.success) {
      localStorage.setItem('token', json.authtoken);
      props.showAlert('Account created Successfully', 'success');
      navigate('/');
    } else {
      props.showAlert('Invalid Details', 'danger');
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2 className="signup-title">Create Your MyNotebook Account</h2>
        <p className="signup-subtitle">Get started by signing up below</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              value={credentials.name}
              id="name"
              onChange={onChange}
              name="name"
              placeholder="Enter your name"
            />
          </div>
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
              minLength={5}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="cpassword">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              value={credentials.cpassword}
              id="cpassword"
              onChange={onChange}
              name="cpassword"
              placeholder="Confirm your password"
              minLength={5}
              required
            />
          </div>
          <button type="submit" className="signup-btn">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;



