import React, { Component } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

class Login extends Component {
  state = {
    username: '',
    password: '',
    error: '',
    usertype: null
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleLogin = () => {
    const { username, password } = this.state;
    axios.get('http://localhost:3001/users')
      .then(response => {
        const user = response.data.find(u => u.username === username && u.password === password);
        if (user) {
          if (user.username === 'admin') {
            this.setState({ usertype: '/adminside' });
          } else {
            this.setState({ usertype: '/userside' });
          }
        } else {
          this.setState({ error: 'Invalid credentials' });
        }
      });
  };

  render() {
    if (this.state.usertype) {
      return <Navigate to={this.state.usertype} />;
    }

    return (
      <div>
        <h2>Login</h2>
        <input name="username" onChange={this.handleInputChange} placeholder="Username" />
        <input name="password" type="password" onChange={this.handleInputChange} placeholder="Password" />
        <button onClick={this.handleLogin}>Login</button>
        {this.state.error && <p>{this.state.error}</p>}
      </div>
    );
  }
}

export default Login;
