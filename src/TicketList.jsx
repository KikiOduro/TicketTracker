import TicketCard from "./TicketCard";

function TicketList({ tickets, onUpdateStatus, onDeleteTicket }) {
  return (
    <div className="ticket-list">
      {tickets.map(function (ticket) {
        return (
          <TicketCard
            key={ticket.id}
            ticket={ticket}
            onUpdateStatus={onUpdateStatus}
            onDeleteTicket={onDeleteTicket}
          />
        );
      })}
    </div>
  );
}

export default TicketList;