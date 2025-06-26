import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function Balance() {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);
  
  const balance = (income - expense).toFixed(2);
  
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };
  
  return (
    <>
      <div className="mainData">
        <h5>YOUR BALANCE</h5>
        <h1 style={{ color: balance > 0 ? "#4caf50" : "#f44336" }}>
          {formatCurrency(balance)}
        </h1>
      </div>
      <div className="balance">
        <div id="in">
          <h5>INCOME</h5>
          <h2>{formatCurrency(income)}</h2>
        </div>
        <div id="out">
          <h5>EXPENSE</h5>
          <h2>{formatCurrency(expense)}</h2>
        </div>
      </div>
    </>
  );
}
