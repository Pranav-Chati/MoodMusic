import React from 'react';
import './App.css';
import StartPage from './StartPage'
import LoginPage from './LoginPage'
import HomePage from './HomePage'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
        <Router>
            <Route exact path={"/"} component={StartPage}/>
            <Switch>
                <Route path="/login" component={LoginPage}/>
                <Route path="/home:auth" component={HomePage}/>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
