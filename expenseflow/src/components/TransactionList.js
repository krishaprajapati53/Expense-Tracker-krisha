import TransactionItem from './TransactionItem';

function TransactionList({ transactions, totalTransactions, onDeleteTransaction }) {
  return (
    <section className="card" aria-labelledby="transactions-heading">
      <h2 id="transactions-heading">Transactions</h2>
      {totalTransactions === 0 ? (
        <div className="empty-message">
          <p>No transactions yet</p>
          <span>Add your first income or expense to get started.</span>
        </div>
      ) : transactions.length === 0 ? (
        <div className="empty-message">
          <p>No matching transactions</p>
          <span>Try changing your filters.</span>
        </div>
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
