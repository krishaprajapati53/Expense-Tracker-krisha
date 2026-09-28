import { useState } from 'react';
import Header from './components/Header';
import BalanceSummary from './components/BalanceSummary';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';

function App() {
  const [transactions] = useState([
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

  return (
    <main className="app-shell">
      <Header />
      <BalanceSummary />
      <TransactionForm />
      <TransactionList transactions={transactions} />
    </main>
  );
}

export default App;
