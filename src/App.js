import "./App.css";
import Home from "./components/Home/HomeContainer";
import LoginContainer from "./components/Login/LoginContainer";
import NavBar from "./components/NavBar/NavBarContainer";

const App = (props) => {
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
      <Home />
      <LoginContainer/>
    </div>
  );
};

export default App;
