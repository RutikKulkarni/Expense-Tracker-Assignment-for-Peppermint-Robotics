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
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform">
      <h2 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
        Net Balance
      </h2>
      <p
        className={`text-3xl font-bold ${
          balance >= 0 ? "text-green-500" : "text-red-500"
        }`}
      >
        ₹{balance}
      </p>
    </div>
  );
};

export default Balance;
