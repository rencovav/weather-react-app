import React from "react";
import "./App.css";
import WeatherSearch from "./WeatherSearch";

function App() {
  return (
    <div className="App">
      <WeatherSearch />
      Open source by Vlasta Rencova. See the code on{" "}
      <a href="https://github.com/rencovav/weather-react-app" target="_blank">
        Github
      </a>
      .
    </div>
  );
}

export default App;
