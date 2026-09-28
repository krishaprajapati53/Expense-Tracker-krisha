import FilterBar from './FilterBar';

function TransactionList() {
  return (
    <section className="card" aria-labelledby="transactions-heading">
      <h2 id="transactions-heading">Transactions</h2>
      <FilterBar />
      <p className="placeholder-copy">Your transaction list will appear here.</p>
    </section>
  );
}

export default TransactionList;
