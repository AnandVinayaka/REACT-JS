import React, { Component } from 'react';
import axios from 'axios';

class UserSide extends Component {
  state = {
    tickets: [],
    description: '',
    priority: ''
  };

  componentDidMount() {
    axios.get('http://localhost:3002/tickets')
      .then(response => this.setState({ tickets: response.data }));
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = () => {
    const { description, priority } = this.state;
    const newTicket = {
      id: (this.state.tickets.length + 1).toString(),
      timestamp: new Date().toISOString(),
      priority: parseInt(priority),
      description: description,
      status: 'open'
    };
    axios.post('http://localhost:3002/tickets', newTicket)
      .then(response => this.setState(prevState => ({ tickets: [...prevState.tickets, response.data] })));
  };

  render() {
    return (
      <div>
        <h2>User Dashboard</h2>
        <div>
          <h3>Raise a Ticket</h3>
          <input name="description" onChange={this.handleInputChange} placeholder="Description" />
          <input name="priority" type="number" onChange={this.handleInputChange} placeholder="Priority (1-5)" />
          <button onClick={this.handleSubmit}>Submit</button>
        </div>
        <div>
          <h3>Your Tickets</h3>
          <ul>
            {this.state.tickets.map(ticket => (
              <li key={ticket.id}>{ticket.description} - {ticket.status}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default UserSide;
