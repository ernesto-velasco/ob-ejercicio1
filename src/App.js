import logo from "./logo.svg";
import "./App.css";
import ComponentA from "./components/component_a";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <ComponentA></ComponentA>
        </div>
      </header>
    </div>
  );
}

export default App;
