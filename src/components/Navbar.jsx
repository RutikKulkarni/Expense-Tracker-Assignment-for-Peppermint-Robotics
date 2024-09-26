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
    <nav className="bg-white dark:bg-gray-800 shadow-md transition duration-300">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-12">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
          Expense Tracker
        </h1>

        <button
          onClick={toggleTheme}
          className="flex items-center gap-2 text-xl text-gray-600 dark:text-gray-300 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300"
        >
          {darkMode ? <FiSun /> : <FiMoon />}
          <span className="text-sm font-medium">
            {darkMode ? "Light" : "Dark"}
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
