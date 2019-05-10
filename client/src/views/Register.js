import React from 'react';
import axios from 'axios';

const Register = (props) => {
  const onSubmit = e => {
    e.preventDefault();
    axios.post('/register', {
      username: e.target.username.value,
      password: e.target.password.value
    })
      .then(() => props.history.push('/login'))
      .catch(err => console.log(err));
  };
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="username" placeholder="username"/>
      <input type="password" name="password" placeholder="password"/>
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
