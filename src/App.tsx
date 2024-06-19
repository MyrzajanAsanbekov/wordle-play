import React from "react";
import "./index.css";
import WordleBoard from "./components/WordleBoard/WordleBoard";
import "./App.css"

function App() {
  return (
    <div className="App">
      <h1>Wordle</h1>
      <WordleBoard/>
    </div>
  );
}

export default App;