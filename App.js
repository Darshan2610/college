import "./App.css";
import Navbar from "./Compo/Navbar";
// import useState from "react";
import Body1 from "./Compo/Body1";
import React,{useState} from "react";

function App() {
  const [mode, setMode] = useState("light"); // Whether dark mode is enabled or not

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      
    }
  };

  return (
    <>
      <Navbar
        title="TextUtils"
        mode={mode}
        toggleMode={toggleMode}
        key={new Date()}
      />
      
      <Body1></Body1>
    </>
  );
}

export default App;
