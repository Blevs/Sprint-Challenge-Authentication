import React from 'react';
import axios from 'axios';

const Login = (props) => {
  const onSubmit = e => {
    e.preventDefault();
    axios.post('/login', {
      username: e.target.username.value,
      password: e.target.password.value
    })
      .then(res => {
        localStorage.setItem('jwt', res.data.token);
        props.history.push('/jokes');
      })
      .catch(err => console.log(err));
  };
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="username" placeholder="username"/>
      <input type="password" name="password" placeholder="password"/>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
