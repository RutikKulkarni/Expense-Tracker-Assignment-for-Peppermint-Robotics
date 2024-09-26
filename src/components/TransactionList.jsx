import React, { useContext, useEffect, useState } from "react";
import { MdOutlineDelete } from "react-icons/md";
import { ExpenseContext } from "../context/ExpenseContext";

const TransactionList = () => {
  const { transactions, deleteTransaction } = useContext(ExpenseContext);
  const [truncateLength, setTruncateLength] = useState(30);

  const handleResize = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      setTruncateLength(15);
    } else {
      setTruncateLength(30);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="p-2 my">
      <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
        Transaction History
      </h3>
      {transactions.length === 0 ? (
        <p className="text-center text-gray-600 dark:text-gray-400">
          No transactions available.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto text-left border-collapse">
            <thead>
              <tr className="bg-gray-200 dark:bg-gray-700">
                <th className="p-3 text-gray-800 dark:text-gray-200 font-semibold">
                  Description
                </th>
                <th className="p-3 text-gray-800 dark:text-gray-200 font-semibold text-center">
                  Date
                </th>
                <th className="p-3 text-gray-800 dark:text-gray-200 font-semibold text-center">
                  Amount
                </th>
                <th className="p-3 text-gray-800 dark:text-gray-200 font-semibold text-center">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr
                  key={transaction.id}
                  className="border-b border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <td className="p-3 text-gray-800 dark:text-gray-200">
                    {transaction.description.length > truncateLength
                      ? `${transaction.description.substring(
                          0,
                          truncateLength
                        )}...`
                      : transaction.description}
                  </td>
                  <td className="p-3 text-gray-800 dark:text-gray-200 text-center">
                    {transaction.date}
                  </td>
                  <td
                    className={`p-3 font-bold ${
                      transaction.type === "Income"
                        ? "text-green-500"
                        : "text-red-500"
                    } text-center`}
                  >
                    {transaction.type === "Income" ? "+" : "-"}₹
                    {transaction.amount}
                  </td>
                  <td className="p-3 text-center">
                    <button
                      onClick={() => deleteTransaction(transaction.id)}
                      className="text-red-500 dark:text-red-600 hover:text-red-600 dark:hover:text-red-700 transition duration-300"
                    >
                      <MdOutlineDelete size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default TransactionList;
