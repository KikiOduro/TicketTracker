import { useState } from "react";

function TicketForm({ onAddTicket }) {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Low");

  function handleSubmit(e) {
    e.preventDefault();

    if (name === "" || title === "") {
      return;
    }

    const newTicket = {
      id: Date.now(),
      name: name,
      title: title,
      description: description,
      priority: priority,
      status: "Open",
    };

    onAddTicket(newTicket);

    setName("");
    setTitle("");
    setDescription("");
    setPriority("Low");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Issue title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Describe the issue"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button type="submit">Submit Ticket</button>
    </form>
  );
}

export default TicketForm;