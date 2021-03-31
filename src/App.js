import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Prague" />
        <footer>
          Coded by Vlasta Rencova. See the code on{" "}
          <a href="https://github.com/rencovav/weather-react-app">Github</a>.
        </footer>
      </div>
    </div>
  );
}

export default App;
