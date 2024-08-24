import React from 'react';
import axios from 'axios';

class AdminTickets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tickets: [],
    };
  }

  componentDidMount() {
    const fetchTickets = async () => {
      try {
        const response = await axios.get('http://localhost:3001/tickets');
        this.setState({ tickets: response.data.tickets });
      } catch (error) {
        console.error(error);
      }
    };

    fetchTickets();
  }

  handleOpenTicket = async (ticketId) => {
    try {
      await axios.put(`http://localhost:3001/tickets/${ticketId}`, {
        status: 'open'
      });
      this.props.navigate(`/ticket-details/${ticketId}`);
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <div>
        <h2>All Tickets</h2>
        <ul>
          {this.state.tickets.map(ticket => (
            <li key={ticket.id}>
              <ticket ticket={ticket} />
              <button onClick={() => this.handleOpenTicket(ticket.id)}>Open</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default AdminTickets;