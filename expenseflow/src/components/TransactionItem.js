function TransactionItem({ transaction, onDelete }) {
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
        <button type="button" className="delete-button" onClick={() => onDelete(transaction.id)}>
          Delete
        </button>
      </div>
    </li>
  );
}

export default TransactionItem;
