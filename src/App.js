import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/page/Home";
import Login from "./components/page/Login";
import NavBar from "./components/NavBar";
import About from "./components/page/About";
import Registration from "./components/page/Registration";
import Adds from "./components/page/Adds";
import NotFound from "./components/page/NotFound";
import { Axios } from "axios";


const App = () => {
  
    Axios.defaults.withCredentials = true;

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
      <body></body>
      <div className="content body">
        <Switch>
          <Route path="/adds" component={Adds} />
          <Route path="/registration" component={Registration} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route path="/" exact component={Home} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
