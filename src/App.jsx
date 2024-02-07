// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import BorderRadiusInput from "./BorderRadiusInput";

const App = () => {
  const [topLeft, setTopLeft] = useState(0);
  const [topRight, setTopRight] = useState(0);
  const [bottomLeft, setBottomLeft] = useState(0);
  const [bottomRight, setBottomRight] = useState(0);

  const boxStyle = {
    width: "300px",
    height: "300px",
    border: "1px solid black",
    backgroundColor: "red",
    borderRadius: `${topLeft === "" ? 0 : topLeft}px ${
      topRight === "" ? 0 : topRight
    }px ${bottomRight === "" ? 0 : bottomRight}px ${
      bottomLeft === "" ? 0 : bottomLeft
    }px`,
  };

  return (
    <div style={{ color: "white" }}>
      <h1>Border Radius Previewer</h1>
      <div className="inputs">
        <BorderRadiusInput label={"Top Left: "} setter={setTopLeft} />
        <BorderRadiusInput label={"Top Right: "} setter={setTopRight} />
        <BorderRadiusInput label={"Bottom Left: "} setter={setBottomLeft} />
        <BorderRadiusInput label={"Bottom Right: "} setter={setBottomRight} />
      </div>
      <div className="center">
        <div style={boxStyle} />
      </div>
      <pre id="css-code">border-radius: {boxStyle.borderRadius}</pre>
    </div>
  );
};

export default App;
