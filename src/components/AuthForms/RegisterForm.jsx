import './AuthForms.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const RegisterForm = ({ backendUrl, setUserState }) => {
  const [registerData, setRegisterData] = useState({
    username: '',
    password: '',
    repeatPassword: '',
  });
  const [error, setError] = useState('');
  const nav = useNavigate();

  const handleFormChange = (e) => {
    setRegisterData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submitData = async () => {
    if (registerData.password !== registerData.repeatPassword)
      setError('Passwords do not match');
    else {
      try {
        await axios.post(`${backendUrl}/user/register`, { registerData });
        nav('/login');
      } catch (error) {
        if (error.code === 'ERR_BAD_REQUEST')
          setError('Username is already used');
        console.error(error);
      }
    }
  };

  const handleFormSubmit = (e) => {
    !registerData.username ||
    !registerData.name ||
    !registerData.password ||
    !registerData.repeatPassword
      ? setError('Fill out all the fields')
      : registerData.name.split(' ').length < 2
      ? setError('Please enter both first and second names')
      : submitData();
  };

  const handleEnter = (e) => {
    e.keyCode === 13 && handleFormSubmit(e);
  };

  return (
    <div className="authFormWrapper">
      <div className="authFormTitle">Register</div>
      <div className="authFormBox">
        <div className="authFormFirstSection">
          <div className="authFormRow">
            <div className="authFormLabel">Username</div>
            <input
              name="username"
              onChange={handleFormChange}
              onKeyDown={handleEnter}
              type="text"
            />
          </div>
          <div className="authFormRow">
            <div className="authFormLabel">Full Name</div>
            <input
              name="name"
              onChange={handleFormChange}
              onKeyDown={handleEnter}
              type="text"
            />
          </div>
          <div className="authFormRow">
            <div className="authFormLabel">Password</div>
            <input
              name="password"
              onChange={handleFormChange}
              onKeyDown={handleEnter}
              type="password"
            />
          </div>
          <div className="authFormRow">
            <div className="authFormLabel">Repeat password</div>
            <input
              name="repeatPassword"
              onChange={handleFormChange}
              onKeyDown={handleEnter}
              type="password"
            />
          </div>
          <div className="authFormButton">
            <button onClick={handleFormSubmit}>Register</button>
            <p className="error">{error}</p>
          </div>
        </div>
        <div className="authFormSecondSection">
          <div className="authFormSectionTitle">Already have an account?</div>
          <div className="authFormButton">
            <Link to="/login">
              <button>Login</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
