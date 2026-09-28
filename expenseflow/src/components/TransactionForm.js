import { useState } from 'react';

function TransactionForm({ onAddTransaction }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('expense');
  const [category, setCategory] = useState('Food');
  const [date, setDate] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    if (description.trim() === '') {
      setError('Please enter a description.');
      return;
    }

    if (Number(amount) <= 0) {
      setError('Please enter an amount greater than 0.');
      return;
    }

    const newTransaction = {
      id: Date.now(),
      description: description.trim(),
      amount: Number(amount),
      type,
      category,
      date,
    };

    onAddTransaction(newTransaction);
    setDescription('');
    setAmount('');
    setType('expense');
    setCategory('Food');
    setDate('');
    setError('');
  }

  return (
    <section className="card" aria-labelledby="form-heading">
      <h2 id="form-heading">Add a Transaction</h2>
      <form className="transaction-form" onSubmit={handleSubmit}>
        <label htmlFor="description">Description</label>
        <input
          id="description"
          type="text"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />

        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          type="number"
          min="0"
          step="0.01"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
        />

        <label htmlFor="type">Type</label>
        <select id="type" value={type} onChange={(event) => setType(event.target.value)}>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

        <label htmlFor="category">Category</label>
        <select
          id="category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="Salary">Salary</option>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Shopping">Shopping</option>
          <option value="Bills">Bills</option>
          <option value="Other">Other</option>
        </select>

        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />

        {error && <p className="form-error">{error}</p>}

        <button type="submit">Add Transaction</button>
      </form>
    </section>
  );
}

export default TransactionForm;
