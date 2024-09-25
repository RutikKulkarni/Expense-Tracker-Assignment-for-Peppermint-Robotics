import React from "react";
import { ExpenseProvider } from "./context/ExpenseContext";
import Balance from "./components/Balance";
import AddTransaction from "./components/AddTransaction";
import TransactionList from "./components/TransactionList";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <ExpenseProvider>
      <div className="bg-gradient-to-r from-blue-200 to-purple-200 dark:from-gray-800 dark:to-gray-900 min-h-screen flex flex-col">
        <Navbar />
        <div className="container mx-auto p-6 flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
          <div className="md:w-2/3 flex flex-col space-y-4">
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
              <Balance />
            </div>
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
              <TransactionList />
            </div>
          </div>
          <div className="md:w-1/3 w-full">
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 h-full">
              <AddTransaction />
            </div>
          </div>
        </div>
      </div>
    </ExpenseProvider>
  );
};

export default App;
