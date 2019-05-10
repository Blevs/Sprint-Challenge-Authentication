import React from 'react';
import './App.css';
import { NavLink, Route } from 'react-router-dom';
import Register from './views/Register';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavLink to='/register'>Register</NavLink>
        <NavLink to='/login'>Login</NavLink>
        <NavLink to='/jokes'>Jokes</NavLink>
      </header>
      <Route path='/register' component={Register}/>
    </div>
  );
}

export default App;
