import { useState } from "react";
import "./App.css";
import TicketForm from "./TicketForm";
import TicketList from "./TicketList";
import FilterBar from "./FilterBar";
import ConfirmModal from "./ConfirmModal";
import persolLogo from "./assets/persol-logo.png";

function App() {
  const [tickets, setTickets] = useState([
    {
      id: 1,
      name: "Akua",
      title: "VPN not connecting",
      description: "Can't connect to office VPN since this morning",
      priority: "High",
      status: "Open",
    },
  ]);

  const [statusFilter, setStatusFilter] = useState("All");
  const [ticketToDeleteId, setTicketToDeleteId] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);

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

  function handleRequestDelete(ticketId) {
    setTicketToDeleteId(ticketId);
  }

  function handleConfirmDelete() {
    const updatedTickets = tickets.filter(function (ticket) {
      return ticket.id !== ticketToDeleteId;
    });

    setTickets(updatedTickets);
    setTicketToDeleteId(null);
  }

  function handleCancelDelete() {
    setTicketToDeleteId(null);
  }

  function handleToggleForm() {
    if (isFormVisible === true) {
      setIsFormVisible(false);
    } else {
      setIsFormVisible(true);
    }
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
        <div>
          <h1>IT Support Ticket Tracker</h1>
          <p className="app-subtitle">
            Track and resolve IT issues across the team
          </p>
        </div>
        <img src={persolLogo} alt="Persol Systems Limited" className="logo" />
      </div>

      <button className="btn-create-ticket" onClick={handleToggleForm}>
        {isFormVisible === true ? "Close Form" : "Create Ticket"}
      </button>

      {isFormVisible === true && (
        <TicketForm
          onAddTicket={handleAddTicket}
          onClose={handleToggleForm}
        />
      )}

      <FilterBar
        statusFilter={statusFilter}
        onSetStatusFilter={setStatusFilter}
      />

      <TicketList
        tickets={getFilteredTickets()}
        onUpdateStatus={handleUpdateStatus}
        onDeleteTicket={handleRequestDelete}
      />

      {ticketToDeleteId !== null && (
        <ConfirmModal
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
        />
      )}
    </div>
  );
}

export default App;