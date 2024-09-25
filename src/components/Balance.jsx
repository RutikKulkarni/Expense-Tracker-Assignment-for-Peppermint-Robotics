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
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold">Net Balance</h2>
      <p
        className={`text-2xl font-bold ${
          balance >= 0 ? "text-green-500" : "text-red-500"
        }`}
      >
        ₹{balance}
      </p>
    </div>
  );
};

export default Balance;
