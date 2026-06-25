function FilterBar({ statusFilter, onSetStatusFilter }) {
  return (
    <div className="filter-bar">
      <button className="btn-all" onClick={() => onSetStatusFilter("All")}>
        All
      </button>
      <button className="btn-open" onClick={() => onSetStatusFilter("Open")}>
        Open
      </button>
      <button
        className="btn-in-progress"
        onClick={() => onSetStatusFilter("In Progress")}
      >
        In Progress
      </button>
      <button
        className="btn-resolved"
        onClick={() => onSetStatusFilter("Resolved")}
      >
        Resolved
      </button>
      <p className="filter-status">Currently showing: {statusFilter}</p>
    </div>
  );
}

export default FilterBar;