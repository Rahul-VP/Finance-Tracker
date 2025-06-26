import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function Form() {
  const { addTransaction } = useContext(GlobalContext);

  const [caption, setCaption] = useState("");
  const [amount, setAmount] = useState("");
  const [title, setTitle] = useState("");

  const addT = (e) => {
    e.preventDefault();

    if (!title.trim() || !amount.trim()) {
      alert("Please fill in all fields");
      return;
    }

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      title,
      amount: +amount,
      caption,
    };

    addTransaction(newTransaction);
    setTitle("");
    setAmount("");
    setCaption("");
  };

  // Determine class for amount input
  let amountClass = "";
  if (amount) {
    if (+amount > 0) amountClass = "input-income";
    else if (+amount < 0) amountClass = "input-expense";
  }

  return (
    <div className="form-container">
      <div className="form-header">
        <h3>➕ Add New Transaction</h3>
        <p>Track your income and expenses</p>
      </div>
      <form className="info" onSubmit={addT}>
        <div className="input-group">
          <div className="input-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
            </svg>
          </div>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Transaction Title"
            type="text"
            required
          />
        </div>

        <div className="input-group">
          <div className="input-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 01-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004zM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 01-.921.42z" />
              <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6a.75.75 0 001.5 0V6zM7 10.5a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5z" clipRule="evenodd" />
            </svg>
          </div>
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Amount (e.g., 100 or -50)"
            type="number"
            step="0.01"
            required
            className={amountClass}
          />
        </div>
        
        <div className="amount-hint">
          <span className="hint-text">💡 Use positive for income, negative for expenses</span>
        </div>

        <div className="input-group">
          <div className="input-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 003 3h15a3 3 0 01-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125zM12 9.75a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H12zm-.75-2.25a.75.75 0 00-1.5 0v6a.75.75 0 001.5 0v-6zM8.25 9.75a.75.75 0 000 1.5H9.75a.75.75 0 000-1.5H8.25zM6 12.75a.75.75 0 00-1.5 0v3a.75.75 0 001.5 0v-3z" clipRule="evenodd" />
            </svg>
          </div>
          <textarea
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            placeholder="Add a note or description (optional)"
            rows="3"
          />
        </div>
        
        <button type="submit">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clipRule="evenodd" />
          </svg>
          Add Transaction
        </button>
      </form>
    </div>
  );
}
