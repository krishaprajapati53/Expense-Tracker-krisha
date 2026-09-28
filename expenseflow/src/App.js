import { useState } from 'react';
import Header from './components/Header';
import BalanceSummary from './components/BalanceSummary';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import FilterBar from './components/FilterBar';

function App() {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      description: 'Freelance Payment',
      amount: 15000,
      type: 'income',
      category: 'Salary',
      date: '2026-09-20',
    },
    {
      id: 2,
      description: 'Lunch',
      amount: 500,
      type: 'expense',
      category: 'Food',
      date: '2026-09-21',
    },
    {
      id: 3,
      description: 'Bus Fare',
      amount: 120,
      type: 'expense',
      category: 'Transport',
      date: '2026-09-22',
    },
    {
      id: 4,
      description: 'Electricity Bill',
      amount: 2400,
      type: 'expense',
      category: 'Bills',
      date: '2026-09-23',
    },
  ]);
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [typeFilter, setTypeFilter] = useState('All');
  const [sortOrder, setSortOrder] = useState('newest');

  function handleAddTransaction(newTransaction) {
    setTransactions([...transactions, newTransaction]);
  }

  function handleDeleteTransaction(id) {
    const updatedTransactions = transactions.filter((transaction) => transaction.id !== id);
    setTransactions(updatedTransactions);
  }

  const totalIncome = transactions
    .filter((transaction) => transaction.type === 'income')
    .reduce((total, transaction) => total + transaction.amount, 0);

  const totalExpenses = transactions
    .filter((transaction) => transaction.type === 'expense')
    .reduce((total, transaction) => total + transaction.amount, 0);

  const currentBalance = totalIncome - totalExpenses;

  const filteredTransactions = transactions.filter((transaction) => {
    const matchesCategory =
      categoryFilter === 'All' || transaction.category === categoryFilter;
    const matchesType = typeFilter === 'All' || transaction.type === typeFilter;

    return matchesCategory && matchesType;
  });

  const sortedTransactions = [...filteredTransactions].sort((firstTransaction, secondTransaction) => {
    if (sortOrder === 'newest') {
      return new Date(secondTransaction.date) - new Date(firstTransaction.date);
    }

    return new Date(firstTransaction.date) - new Date(secondTransaction.date);
  });

  return (
    <main className="app-shell">
      <Header />
      <BalanceSummary
        totalIncome={totalIncome}
        totalExpenses={totalExpenses}
        currentBalance={currentBalance}
      />
      <TransactionForm onAddTransaction={handleAddTransaction} />
      <FilterBar
        categoryFilter={categoryFilter}
        onCategoryFilterChange={setCategoryFilter}
        typeFilter={typeFilter}
        onTypeFilterChange={setTypeFilter}
        sortOrder={sortOrder}
        onSortOrderChange={setSortOrder}
      />
      <TransactionList
        transactions={sortedTransactions}
        onDeleteTransaction={handleDeleteTransaction}
      />
    </main>
  );
}

export default App;
