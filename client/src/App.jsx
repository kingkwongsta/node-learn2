import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function clickMe() {
    fetch("/api/").then((res) => console.log(res.json()));
  }
  return (
    <div className="App">
      <button onClick={clickMe}>HELLO WORLD</button>
    </div>
  );
}

export default App;
