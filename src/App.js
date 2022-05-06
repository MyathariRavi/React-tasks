import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from '../src/components/Hello.jsx';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import MainNav from './components/MainNav';
import LoginPage from './components/LoginPage';


class App extends Component {
  render() {
    let props = {
      name: "gks",
      id: 1234
    }
    return (
      <div>
        
        <MainNav/>
        <Switch>
          <Route path='/' exact>
            <Hello />
          </Route>

          <Route path='/login'>
            <LoginPage />

          </Route>

          <Route path='/favMeet'>
            
          </Route>

          <Route path='/final'>
            <div>
              <h1>Final Route...</h1>
            </div>
          </Route>
        </Switch>
      </div>
    );
  }
}



export default App;
