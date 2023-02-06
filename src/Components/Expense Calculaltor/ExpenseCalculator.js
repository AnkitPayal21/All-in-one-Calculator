import React, { useState } from 'react'
import './ExpenseCalculator.css'
import Navbar from '../../App'


const ExpenseCalculator = () => {
  const [expenses, setExpenses] = useState([]);
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const addExpense = (event) => {
    event.preventDefault();
    setExpenses([
      ...expenses,
      { amount: parseInt(amount), description: description },
    ]);
    setAmount("");
    setDescription("");
  };

  const deleteExpense = (index) => {
    setExpenses(expenses.filter((expense, i) => i !== index));
  };

  return (
    <>
    <Navbar/>
    <div className='ExpenseMain'>
      <h1>Expense Tracker</h1>
      <form onSubmit={addExpense}>
        <input
          type="text"
          placeholder="Amount"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
          />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          />
        <button type="submit">Add Expense</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Amount</th>
            <th>Description</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
            <tr key={index}>
              <td>{expense.amount}</td>
              <td>{expense.description}</td>
              <td>
                <button onClick={() => deleteExpense(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
          </>
  );
};

export default ExpenseCalculator;