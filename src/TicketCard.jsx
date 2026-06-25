function getPriorityClass(priority) {
  if (priority === "High") {
    return "priority-high";
  } else if (priority === "Medium") {
    return "priority-medium";
  } else {
    return "priority-low";
  }
}

function getStatusClass(status) {
  if (status === "Open") {
    return "status-open";
  } else if (status === "In Progress") {
    return "status-in-progress";
  } else {
    return "status-resolved";
  }
}

function TicketCard({ ticket, onUpdateStatus }) {
  return (
    <div className="ticket-card">
      <h3>{ticket.title}</h3>
      <p>Submitted by: {ticket.name}</p>
      <p>{ticket.description}</p>
      <p>
        Priority:{" "}
        <span className={getPriorityClass(ticket.priority)}>
          {ticket.priority}
        </span>
      </p>
      <p>
        Status:{" "}
        <span className={getStatusClass(ticket.status)}>
          {ticket.status}
        </span>
      </p>

      <button
        className="btn-open"
        onClick={() => onUpdateStatus(ticket.id, "Open")}
      >
        Open
      </button>
      <button
        className="btn-in-progress"
        onClick={() => onUpdateStatus(ticket.id, "In Progress")}
      >
        In Progress
      </button>
      <button
        className="btn-resolved"
        onClick={() => onUpdateStatus(ticket.id, "Resolved")}
      >
        Resolved
      </button>
    </div>
  );
}

export default TicketCard;