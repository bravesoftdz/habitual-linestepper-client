import React from "react";

import FlipCard from "./common/flipCard/FlipCard";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="left">
        <FlipCard>
          <FlipCard.Front>
            <h1>Me</h1>
          </FlipCard.Front>
          <FlipCard.Back>
            <h1>CV</h1>
          </FlipCard.Back>
        </FlipCard>
      </div>
      <div className="center">
        <h1>Centre</h1>
      </div>
      <div className="right">
        <h1>Right</h1>
      </div>
    </div>
  );
}

export default App;
