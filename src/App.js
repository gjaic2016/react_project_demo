import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import About from './components/About';

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
        <div className="content">
          <Route path="/adds" component={Login} />
          <Route path="/registration" component={Login} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route path="/" exact component={Home} />
        </div>
      </body>
    </div>
  );
};

export default App;
