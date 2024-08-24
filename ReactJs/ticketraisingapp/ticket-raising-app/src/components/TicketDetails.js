import React from 'react';
import axios from 'axios';

class TicketDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ticket: null,
    };
  }

  componentDidMount() {
    const { id } = this.props.params;
    const fetchTicket = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/tickets/${id}`);
        this.setState({ ticket: response.data.ticket });
      } catch (error) {
        console.error(error);
      }
    };

    fetchTicket();
  }

  handleCloseTicket = async () => {
    const { id } = this.props.params;
    try {
      await axios.put(`http://localhost:3001/tickets/${id}`, {
        status: 'closed'
      });
      this.props.navigate('/admin-tickets');
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    const { ticket } = this.state;

    return (
      <div>
        <h2>Ticket Details</h2>
        {ticket && (
          <div>
            <p>ID: {ticket.id}</p>
            <p>Timestamp: {ticket.timestamp}</p>
            <p>Priority: {ticket.priority}</p>
            <p>Description: {ticket.description}</p>
            <p>Status: {ticket.status}</p>
            {ticket.status === 'open' && <button onClick={this.handleCloseTicket}>Close</button>}
          </div>
        )}
      </div>
    );
  }
}

export default TicketDetails;