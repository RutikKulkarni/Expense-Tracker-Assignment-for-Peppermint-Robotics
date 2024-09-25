import React, { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

const TransactionList = () => {
  const { transactions, deleteTransaction } = useContext(ExpenseContext);

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg my-4 transition-transform transform">
      <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
        Transaction History
      </h3>
      <ul>
        {transactions.map((transaction) => (
          <li
            key={transaction.id}
            className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition duration-300"
          >
            <span className="font-medium text-gray-800 dark:text-gray-200">
              {transaction.description}
            </span>
            <span
              className={`font-bold ${
                transaction.type === "Income"
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {transaction.type === "Income" ? "+" : "-"}₹{transaction.amount}
            </span>
            <button
              onClick={() => deleteTransaction(transaction.id)}
              className="bg-red-500 dark:bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-600 dark:hover:bg-red-700 transition duration-300"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
