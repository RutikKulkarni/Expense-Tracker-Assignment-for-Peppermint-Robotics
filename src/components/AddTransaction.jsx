import React, { useState, useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
import { v4 as uuidv4 } from "uuid";

const AddTransaction = () => {
  const { addTransaction } = useContext(ExpenseContext);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("Expense");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount) return;

    const newTransaction = {
      id: uuidv4(),
      description,
      amount: +amount,
      type,
      date: new Date().toLocaleDateString(),
    };

    addTransaction(newTransaction);
    setDescription("");
    setAmount("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded-lg shadow-lg my-4"
    >
      <h3 className="text-lg font-semibold mb-2">Add New Transaction</h3>
      <input
        type="text"
        className="w-full mb-2 p-2 border rounded"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        className="w-full mb-2 p-2 border rounded"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select
        className="w-full mb-2 p-2 border rounded"
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="Expense">Expense</option>
        <option value="Income">Income</option>
      </select>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
      >
        Add Transaction
      </button>
    </form>
  );
};

export default AddTransaction;
