import React from 'react';
import axios from 'axios';

class UserTickets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openTickets: [],
      closedTickets: [],
    };
  }

  componentDidMount() {
    const fetchTickets = async () => {
      try {
        const response = await axios.get('http://localhost:3001/tickets');
        const data = response.data.tickets;

        this.setState({
          openTickets: data.filter(ticket => ticket.status === 'open'),
          closedTickets: data.filter(ticket => ticket.status === 'closed')
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchTickets();
  }

  render() {
    return (
      <div>
        <h2>Opened Tickets</h2>
        <ul>
          {this.state.openTickets.map(ticket => (
            <li key={ticket.id}>
              <ticket ticket={ticket} />
            </li>
          ))}
        </ul>

        <h2>Closed Tickets</h2>
        <ul>
          {this.state.closedTickets.map(ticket => (
            <li key={ticket.id}>
              <ticket ticket={ticket} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default UserTickets;