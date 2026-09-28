function TransactionItem({ transaction }) {
  const formattedAmount = transaction.amount.toLocaleString();
  const transactionType = transaction.type === 'income' ? 'Income' : 'Expense';

  return (
    <li className="transaction-item">
      <div>
        <h3>{transaction.description}</h3>
        <p>{transaction.category}</p>
        <p>{transaction.date}</p>
      </div>
      <div className="transaction-amount">
        <strong>Rs. {formattedAmount}</strong>
        <span className={transaction.type}>{transactionType}</span>
      </div>
    </li>
  );
}

export default TransactionItem;
