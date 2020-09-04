import React from "react";
import "./App.css";
import Video from "./video/Video";

function App() {
  return (
    <div className="app">
      <h2>Lets Build tik-tok</h2>
      <div className="app__videos">
        <Video />
        <Video />
      </div>
    </div>
  );
}

export default App;
