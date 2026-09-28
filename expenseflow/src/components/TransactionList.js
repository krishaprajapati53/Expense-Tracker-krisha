import TransactionItem from './TransactionItem';

function TransactionList({ transactions, onDeleteTransaction }) {
  return (
    <section className="card" aria-labelledby="transactions-heading">
      <h2 id="transactions-heading">Transactions</h2>
      {transactions.length === 0 ? (
        <p className="placeholder-copy">No transactions found for this category.</p>
      ) : (
        <ul className="transaction-list">
          {transactions.map((transaction) => (
            <TransactionItem
              key={transaction.id}
              transaction={transaction}
              onDelete={onDeleteTransaction}
            />
          ))}
        </ul>
      )}
    </section>
  );
}

export default TransactionList;
