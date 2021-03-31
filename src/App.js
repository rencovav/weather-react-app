import React from "react";
import "./App.css";
import WeatherSearch from "./WeatherSearch";

function App() {
  return (
    <div className="App">
      <div className="container">
        <button className="btn btn-primary">Button</button>
        <WeatherSearch />
        <footer>
          Coded by Vlasta Rencova. See the code on{" "}
          <a href="https://github.com/rencovav/weather-react-app">Github</a>.
        </footer>
      </div>
    </div>
  );
}

export default App;
