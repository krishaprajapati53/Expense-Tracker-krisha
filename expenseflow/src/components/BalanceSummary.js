function BalanceSummary({ totalIncome, totalExpenses, currentBalance }) {
  return (
    <section className="balance-summary" aria-labelledby="balance-heading">
      <h2 id="balance-heading">Balance Summary</h2>
      <div className="summary-cards">
        <article className="summary-card income-summary">
          <h3>Total Income</h3>
          <p>Rs. {totalIncome.toLocaleString()}</p>
        </article>

        <article className="summary-card expense-summary">
          <h3>Total Expenses</h3>
          <p>Rs. {totalExpenses.toLocaleString()}</p>
        </article>

        <article className="summary-card balance-summary-card">
          <h3>Current Balance</h3>
          <p>Rs. {currentBalance.toLocaleString()}</p>
        </article>
      </div>
    </section>
  );
}

export default BalanceSummary;
