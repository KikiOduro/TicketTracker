import { useState } from "react";

function TicketForm({ onAddTicket, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    description: "",
    priority: "Low",
  });
  const [errors, setErrors] = useState({});

  function validateForm(data) {
    const nextErrors = {};

    if (data.name.trim() === "") {
      nextErrors.name = "Name is required.";
    }

    if (data.title.trim() === "") {
      nextErrors.title = "Issue title is required.";
    }

    if (data.description.trim() === "") {
      nextErrors.description = "Please describe the issue.";
    }

    return nextErrors;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  function handleSubmit(e) {
    e.preventDefault();

    const nextErrors = validateForm(formData);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    const newTicket = {
      id: Date.now(),
      name: formData.name,
      title: formData.title,
      description: formData.description,
      priority: formData.priority,
      status: "Open",
    };

    onAddTicket(newTicket);
    onClose();
    setErrors({});

    setFormData({
      name: "",
      title: "",
      description: "",
      priority: "Low",
    });
  }

  return (
    <div className="modal-overlay">
      <div className="modal-box ticket-form-modal">
        <div className="ticket-form-header">
          <div className="ticket-form-heading">
            <p className="ticket-form-description">
              Fill in the details below so we can help with your issue.
            </p>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <label className="sr-only" htmlFor="ticket-name">
            Your name
          </label>
          <input
            id="ticket-name"
            name="name"
            type="text"
            placeholder="Your name"
            aria-invalid={errors.name ? "true" : "false"}
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="field-error">{errors.name}</p>}

          <label className="sr-only" htmlFor="ticket-title">
            Issue title
          </label>
          <input
            id="ticket-title"
            name="title"
            type="text"
            placeholder="Issue title"
            aria-invalid={errors.title ? "true" : "false"}
            value={formData.title}
            onChange={handleChange}
          />
          {errors.title && <p className="field-error">{errors.title}</p>}

          <label className="sr-only" htmlFor="ticket-description">
            Describe the issue
          </label>
          <textarea
            id="ticket-description"
            name="description"
            placeholder="Describe the issue"
            aria-invalid={errors.description ? "true" : "false"}
            value={formData.description}
            onChange={handleChange}
          />
          {errors.description && (
            <p className="field-error">{errors.description}</p>
          )}

          <select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <button type="submit">Submit Ticket</button>
        </form>
        <button type="button" className="btn-close-modal" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}
export default TicketForm;


// function TicketForm() {
//   const[ticket, setTicketData] = useState({
//     name: "",
//     title: "",
//     description: "",
//     priority: "Low"
//   });

//     const handleChange = (e) => {
//       console.log({e});
//   const { name, value } = e.target;

//   setTicket((prev) => ({
//     ...prev,[name]: value,
//   }));
// };//
