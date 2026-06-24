function FilterBar({ statusFilter, onSetStatusFilter }) {
  return (
    <div className="filter-bar">
      <button onClick={() => onSetStatusFilter("All")}>All</button>
      <button onClick={() => onSetStatusFilter("Open")}>Open</button>
      <button onClick={() => onSetStatusFilter("In Progress")}>
        In Progress
      </button>
      <button onClick={() => onSetStatusFilter("Resolved")}>Resolved</button>
      <p>Currently showing: {statusFilter}</p>
    </div>
  );
}

export default FilterBar;