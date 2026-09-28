import Header from './components/Header';
import BalanceSummary from './components/BalanceSummary';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';

function App() {
  return (
    <main className="app-shell">
      <Header />
      <BalanceSummary />
      <TransactionForm />
      <TransactionList />
    </main>
  );
}

export default App;
