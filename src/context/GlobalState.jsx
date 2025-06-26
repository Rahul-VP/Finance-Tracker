import React, { createContext, useState } from 'react';

// Initial state (could be loaded from localStorage or API in a real app)
const initialTransactions = [];

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(initialTransactions);

  // Add a new transaction
  function addTransaction(transaction) {
    setTransactions([transaction, ...transactions]);
  }

  // Delete a transaction by id
  function deleteTransaction(id) {
    setTransactions(transactions.filter(t => t.id !== id));
  }

  return (
    <GlobalContext.Provider value={{ transactions, addTransaction, deleteTransaction }}>
      {children}
    </GlobalContext.Provider>
  );
}; 