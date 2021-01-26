import logo from "./logo.svg";
import "./App.css";
import Factory from "./components/factory";

function App() {
  const input1 = Factory.getProduct("Input1", "text1");
  const input2 = Factory.getProduct("Input2", "text2");
  const input3 = Factory.getProduct("Input3", "text3");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {[input3, input2, input1]}
      </header>
    </div>
  );
}

export default App;
