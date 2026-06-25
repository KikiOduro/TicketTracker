import { useEffect, useState } from "react";
import "./App.css";
import TicketForm from "./TicketForm";
import TicketList from "./TicketList";
import FilterBar from "./FilterBar";
import persolLogo from "./assets/persol-logo.png";

const TICKETS_STORAGE_KEY = "akuas-testproject-tickets";

function getInitialTickets() {
  const savedTickets = localStorage.getItem(TICKETS_STORAGE_KEY);

  if (savedTickets) {
    return JSON.parse(savedTickets);
  }

  return [
    {
      id: 1,
      name: "Akua",
      title: "API not connecting",
      description: "Can't connect to office API since this morning",
      priority: "High",
      status: "Open",
    },
  ];
}

function App() {
  const [tickets, setTickets] = useState(getInitialTickets);

  const [statusFilter, setStatusFilter] = useState("All");

  useEffect(() => {
    localStorage.setItem(TICKETS_STORAGE_KEY, JSON.stringify(tickets));
  }, [tickets]);

  function handleAddTicket(newTicket) {
    const updatedTickets = tickets.concat(newTicket);
    setTickets(updatedTickets);
  }

  function handleUpdateStatus(ticketId, newStatus) {
    const updatedTickets = tickets.map(function (ticket) {
      if (ticket.id === ticketId) {
        return {
          id: ticket.id,
          name: ticket.name,
          title: ticket.title,
          description: ticket.description,
          priority: ticket.priority,
          status: newStatus,
        };
      } else {
        return ticket;
      }
    });

    setTickets(updatedTickets);
  }

  function getFilteredTickets() {
    if (statusFilter === "All") {
      return tickets;
    } else {
      return tickets.filter(function (ticket) {
        return ticket.status === statusFilter;
      });
    }
  }

  return (
    <div className="app">
      <div className="app-header">
        <h1>IT Support Ticket Tracker</h1>
        <img src={persolLogo} alt="Persol Systems Limited" className="logo" />
      </div>

      <TicketForm onAddTicket={handleAddTicket} />
      <FilterBar
        statusFilter={statusFilter}
        onSetStatusFilter={setStatusFilter}
      />
      <TicketList
        tickets={getFilteredTickets()}
        onUpdateStatus={handleUpdateStatus}
      />
    </div>
  );
}

export default App;
