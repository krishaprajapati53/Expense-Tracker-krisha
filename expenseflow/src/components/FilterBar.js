function FilterBar({ categoryFilter, onCategoryFilterChange }) {
  return (
    <section className="filter-bar" aria-label="Transaction filters">
      <label htmlFor="category-filter">Filter by category</label>
      <select
        id="category-filter"
        value={categoryFilter}
        onChange={(event) => onCategoryFilterChange(event.target.value)}
      >
        <option value="All">All</option>
        <option value="Salary">Salary</option>
        <option value="Food">Food</option>
        <option value="Transport">Transport</option>
        <option value="Shopping">Shopping</option>
        <option value="Bills">Bills</option>
        <option value="Other">Other</option>
      </select>
    </section>
  );
}

export default FilterBar;
