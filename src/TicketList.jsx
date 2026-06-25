import TicketCard from "./TicketCard";

function TicketList({ tickets, onUpdateStatus }) {
  return (
    <div className="ticket-list">
      {tickets.map(function (ticket) {
        return (
          <TicketCard
            key={ticket.id}
            ticket={ticket} 
            onUpdateStatus={onUpdateStatus}
          />
        );
      })}
    </div>
  );
}

export default TicketList;