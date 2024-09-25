import React, { createContext, useReducer } from "react";
import { snackbarGenerator } from "../utils/snackbarGenerator";

const initialState = {
  transactions: [],
};

export const ExpenseContext = createContext(initialState);

const expenseReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      snackbarGenerator.enqueueSnackbarFunc("Transaction added!", "success");
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    case "DELETE_TRANSACTION":
      snackbarGenerator.enqueueSnackbarFunc("Transaction deleted!", "error");
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export const ExpenseProvider = ({ children }) => {
  const [state, dispatch] = useReducer(expenseReducer, initialState);

  const addTransaction = (transaction) => {
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });
  };

  const deleteTransaction = (id) => {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  };

  return (
    <ExpenseContext.Provider
      value={{
        transactions: state.transactions,
        addTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};
