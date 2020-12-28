import "./App.css";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";

const App = (props) => {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-link">
          QUICKFIX
        </div>
      </header>
      <div className="App-navbar">
        <NavBar />
      </div>
      <Home />
      {/* <body>
        <a>

        BODY
        </a>
      </body> */}
    </div>
  );
};

export default App;
