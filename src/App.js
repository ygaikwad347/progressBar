import { useState } from "react";

export default function App() {
  const [barWidth, setBarWidth] = useState(0);

  const handleChange = (e) => {
    const value = Number(e.target.value);
    setBarWidth(value);
  };

  return (
    <div className="App">
      <label>Enter your progress</label>
      <input value={barWidth} onChange={handleChange} />
      <div
        style={{
          position: "relative",
          marginTop: "10px",
          width: "100%",
          border: "2px solid black",
          height: "30px"
        }}
      >
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: `${barWidth}%`,
            backgroundColor: "blue",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            overflow: "hidden",
            color: "white"
          }}
        >
          <span>{barWidth}%</span>
        </div>
      </div>
    </div>
  );
}
