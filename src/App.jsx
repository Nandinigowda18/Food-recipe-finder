import React, { useState } from "react";
import Home from "../src/pages/Home";
import DarkModeToggle from "./components/DarkModeToggle";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap
import "./index.css"; // Your custom CSS if needed

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    
  <div
  className={`min-vh-100 text-${darkMode ? "white" : "dark"}`}
  style={{
    // backgroundImage: "url('/images/delicious-food.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundColor: darkMode ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.6)",
    backgroundBlendMode: "overlay"
  }}
>
  <div className="container py-3">
    <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
    <Home />
  </div>
</div>

  );
}

export default App;

