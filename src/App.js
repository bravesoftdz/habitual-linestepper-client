import React from "react";

import { Main } from "./components/main/Main";

import useCurrentDimensions from "./hooks/getWindowDimensions";


function App() {
  let windowDimensions = useCurrentDimensions()

  return (
    <>
      <Main windowHeight={windowDimensions.windowHeight} windowWidth={windowDimensions.windowWidth} />
    </>
  );
}

export default App;
