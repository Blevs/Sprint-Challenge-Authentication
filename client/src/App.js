import React from 'react';
import './App.css';
import { NavLink, Route } from 'react-router-dom';
import Register from './views/Register';
import Login from './views/Login';
import Jokes from './views/Jokes';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavLink to='/register'>Register</NavLink>
        <NavLink to='/login'>Login</NavLink>
        <NavLink to='/jokes'>Jokes</NavLink>
      </header>
      <Route path='/register' component={Register}/>
      <Route path='/login' component={Login}/>
      <Route path='/jokes' component={Jokes}/>
    </div>
  );
}

export default App;
