import React, { useState, useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
import { v4 as uuidv4 } from "uuid";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddTransaction = () => {
  const { addTransaction } = useContext(ExpenseContext);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("Expense");
  const [date, setDate] = useState(new Date());

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount) return;

    const newTransaction = {
      id: uuidv4(),
      description,
      amount: +amount,
      type,
      date: date.toLocaleDateString(),
    };

    addTransaction(newTransaction);
    setDescription("");
    setAmount("");
    setDate(new Date());
  };

  return (
    <form onSubmit={handleSubmit} className="p-2 my-1">
      <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
        Add New Transaction
      </h3>
      <input
        type="text"
        className="w-full mb-4 p-3 border border-gray-300 rounded-lg dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        className="w-full mb-4 p-3 border border-gray-300 rounded-lg dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <DatePicker
        selected={date}
        onChange={(date) => setDate(date)}
        className="w-full mb-4 p-3 border border-gray-300 rounded-lg dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        dateFormat="dd/MM/yyyy"
        wrapperClassName="w-full"
      />

      <select
        className="w-full mb-4 p-3 border border-gray-300 rounded-lg dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="Expense">Expense</option>
        <option value="Income">Income</option>
      </select>
      <button
        type="submit"
        className="bg-blue-500 dark:bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-600 dark:hover:bg-blue-700 transition duration-300 w-full"
      >
        Add Transaction
      </button>
    </form>
  );
};

export default AddTransaction;
