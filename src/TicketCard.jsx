function TicketCard({ ticket, onUpdateStatus }) {
  return (
    <div className="ticket-card">
      <h3>{ticket.title}</h3>
      <p>Submitted by: {ticket.name}</p>
      <p>{ticket.description}</p>
      <p>Priority: {ticket.priority}</p>
      <p>Status: {ticket.status}</p>

      <button onClick={() => onUpdateStatus(ticket.id, "Open")}>
        Open
      </button>
      <button onClick={() => onUpdateStatus(ticket.id, "In Progress")}>
        In Progress
      </button>
      <button onClick={() => onUpdateStatus(ticket.id, "Resolved")}>
        Resolved
      </button>
    </div>
  );
}

export default TicketCard;