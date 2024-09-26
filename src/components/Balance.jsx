import React, { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

const Balance = () => {
  const { transactions } = useContext(ExpenseContext);

  const income = transactions
    .filter((item) => item.type === "Income")
    .reduce((acc, item) => acc + item.amount, 0);

  const expense = transactions
    .filter((item) => item.type === "Expense")
    .reduce((acc, item) => acc + item.amount, 0);

  const balance = income - expense;

  return (
    <div className="p-2">
      <h2 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-200 text-center">
        Net Balance
      </h2>
      <p
        className={`text-4xl font-bold text-center mb-4 ${
          balance >= 0 ? "text-green-500" : "text-red-500"
        }`}
      >
        ₹{balance.toLocaleString()}
      </p>
      <div className="flex justify-between mt-6">
        <div className="flex-1 text-center p-2 mx-1 bg-green-100 dark:bg-green-900 rounded-lg">
          <h4 className="text-lg font-semibold text-green-700 dark:text-green-300">
            Income
          </h4>
          <p className="text-2xl font-bold text-green-500 dark:text-green-400">
            ₹{income.toLocaleString()}
          </p>
        </div>
        <div className="flex-1 text-center p-3 mx-1 bg-gray-200 dark:bg-gray-700 rounded-lg shadow-sm">
          <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            Expenses
          </h4>
          <p className="text-2xl font-bold text-red-500 dark:text-red-400">
            ₹{expense.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Balance;
