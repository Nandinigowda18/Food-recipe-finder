import React from "react";

function DarkModeToggle({ darkMode, setDarkMode }) {
  return (
    <div className="d-flex justify-content-end p-3">
      <button
        className={`btn ${darkMode ? "btn-light" : "btn-dark"} btn-sm`}
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
}

export default DarkModeToggle;

