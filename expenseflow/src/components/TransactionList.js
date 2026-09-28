import TransactionItem from './TransactionItem';

function TransactionList({ transactions, onDeleteTransaction }) {
  return (
    <section className="card" aria-labelledby="transactions-heading">
      <h2 id="transactions-heading">Transactions</h2>
      <ul className="transaction-list">
        {transactions.map((transaction) => (
          <TransactionItem
            key={transaction.id}
            transaction={transaction}
            onDelete={onDeleteTransaction}
          />
        ))}
      </ul>
    </section>
  );
}

export default TransactionList;
