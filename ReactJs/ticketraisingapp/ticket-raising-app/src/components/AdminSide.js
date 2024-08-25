import React, { Component } from "react";
import axios from "axios";

class AdminSide extends Component {
  state = {
    tickets: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:3002/tickets")
      .then((response) => this.setState({ tickets: response.data }));
  }

  handleStatusChange = (id, status) => {
    axios
      .patch(`http://localhost:3002/tickets/${id}`, { status })
      .then((response) => {
        const updatedTickets = this.state.tickets.map((ticket) =>
          ticket.id === id ? { ...ticket, status: status } : ticket
        );
        this.setState({ tickets: updatedTickets });
      });
  };

  render() {
    return (
      <div>
        <h2>Admin Dashboard</h2>
        <ul>
          {this.state.tickets.map((ticket) => (
            <li key={ticket.id}>
              {ticket.description} - {ticket.status}
              {ticket.status === "open" ? (
                <button
                  onClick={() => this.handleStatusChange(ticket.id, "closed")}>
                  Close
                </button>
              ) : (
                <button
                  onClick={() => this.handleStatusChange(ticket.id, "open")}>
                  Reopen
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default AdminSide;
