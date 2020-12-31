import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Registration from './components/Registration';
import Adds from './components/Adds';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-link">
          QUICKFIX
          <div className="divSpacing"></div>
        </div>
        <div className="App-navbar">
          <NavBar />
        </div>
      </header>
      <body>
      </body>
        <div className="content body">
          <Route path="/adds" component={Adds} />
          <Route path="/registration" component={Registration} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route path="/" exact component={Home} />
        </div>
    </div>
  );
};

export default App;
