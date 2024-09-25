import React, { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

const TransactionList = () => {
  const { transactions, deleteTransaction } = useContext(ExpenseContext);

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg my-4">
      <h3 className="text-lg font-semibold mb-2">Transaction History</h3>
      <ul>
        {transactions.map((transaction) => (
          <li
            key={transaction.id}
            className="flex justify-between p-2 border-b border-gray-200"
          >
            <span>{transaction.description}</span>
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
              className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
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
