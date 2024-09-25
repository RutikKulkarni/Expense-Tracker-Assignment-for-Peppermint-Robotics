import React, { useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <nav className="bg-light-card dark:bg-dark-card shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-2 px-4 md:px-12">
        <h1 className="text-2xl font-bold text-light-text dark:text-dark-text">
          Expense Tracker
        </h1>

        <button
          onClick={toggleTheme}
          className="flex items-center gap-2 text-xl text-light-text dark:text-dark-text p-2 rounded-lg "
        >
          {darkMode ? <FiSun /> : <FiMoon />}
          <span className="text-sm">{darkMode ? "Light " : "Dark "}</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
