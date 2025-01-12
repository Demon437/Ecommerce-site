import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import './Login.css';

function Login() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');

  useEffect(() => {
    document.body.classList.add('no-scroll');
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, []);

  const handleApi = (e) => {
    const url = "http://localhost:4000/login";
    const data1 = { uname: name, upass: pass };
    axios.post(url, data1).then((result) => {
      if (result.data === "Login Sucessfully") {
        navigate("/upload");
      } else {
        alert(result.data);
      }
    });
  };

  return (
    <div className="login-container">
      {/* Left Side */}
      <div className="login-image">
        <img 
          src="https://media.istockphoto.com/id/1220728836/photo/tropical-island-palm-tree-beach-from-above.jpg?s=1024x1024&w=is&k=20&c=7mp69Ti_W5pk9hodmh6XkRHTN7ZkLLyRky2SVOMJAiw=" 
          alt="Login Visual" 
        />
      </div>

      {/* Right Side */}
      <div className="login-form">
        <div className="login-form-container">
          <div className="form-header">Login</div>
          <div className="custom-input-wrapper">
            <label htmlFor="form1">Email Address</label>
            <input 
              id="form1" 
              type="email" 
              onChange={(e) => setName(e.target.value)} 
              placeholder="Enter Your Email" 
            />
          </div>
          <div className="custom-input-wrapper">
            <label htmlFor="form2">Password</label>
            <input 
              id="form2" 
              type="password" 
              onChange={(e) => setPass(e.target.value)} 
              placeholder="Enter Your Password" 
            />
          </div>
          <MDBBtn className="mb-4" style={{ width: "40%" }} onClick={handleApi}>
            Sign in
          </MDBBtn>
          <div className="form-footer">
            <p>Not a member? <a href="#!">Register</a></p>
            <p>or sign up with:</p>
            <div className="d-flex justify-content-between mx-auto" style={{ width: '50%' }}>
              <MDBBtn tag="a" color="none" className="m-1" style={{ color: '#1266f1' }}>
                <MDBIcon fab icon="facebook-f" size="sm" />
              </MDBBtn>
              <MDBBtn tag="a" color="none" className="m-1" style={{ color: '#1266f1' }}>
                <MDBIcon fab icon="twitter" size="sm" />
              </MDBBtn>
              <MDBBtn tag="a" color="none" className="m-1" style={{ color: '#1266f1' }}>
                <MDBIcon fab icon="google" size="sm" />
              </MDBBtn>
              <MDBBtn tag="a" color="none" className="m-1" style={{ color: '#1266f1' }}>
                <MDBIcon fab icon="github" size="sm" />
              </MDBBtn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
