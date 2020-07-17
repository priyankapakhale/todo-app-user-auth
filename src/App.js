import React from 'react';
import './App.css';
import {Switch} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import Register from './components/Register'
import PrivateRoute from './components/PrivateRoute'
import PublicRoute from './components/PublicRoute'

function App() {
  return (
    <div className="App">
      <Switch>
        <PrivateRoute component={Home} path="/" exact />
        <PublicRoute restricted={true} component={Login} path="/login" exact />
        <PublicRoute restricted={true} component={Register} path="/register" exact />
      </Switch>
    </div>
    
  );
}

export default App;
