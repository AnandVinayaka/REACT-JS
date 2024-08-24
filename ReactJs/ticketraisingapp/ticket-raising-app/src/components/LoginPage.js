import React from "react";
import axios from "axios";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      role: "user",
      error: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    this.setState({ error: "" }); // Clear previous error message

    try {
      const response = await axios.post("http://localhost:3001/tickets", {
        username: this.state.username,
        password: this.state.password,
        role: this.state.role, // You might not need to send the role in the request
      });

      if (response.data.success) {
        localStorage.setItem("token", response.data.token); // Assuming you have a token in the response
        localStorage.setItem("role", response.data.role);
        this.props.navigate(
          response.data.role === "User" ? "/user-tickets" : "/admin-tickets"
        );
      } else {
        this.setState({ error: response.data.message }); // Display specific error message from JSON Server if any
      }
    } catch (error) {
      console.error(error);
      this.setState({ error: "An error occurred" }); // Generic error message for unexpected errors
    }
  };

  render() {
    const { username, password, role, error } = this.state;

    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={this.handleChange}
            required
          />
          <br />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            required
          />
          <br />
          {/* You might not need the role selection if JSON Server handles roles differently */}
          <label htmlFor="role">Role:</label>
          <select
            id="role"
            name="role"
            value={role}
            onChange={this.handleChange}>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          <br />
          <button type="submit">Login</button>
        </form>
        {error && <p>{error}</p>}
      </div>
    );
  }
}

export default LoginPage;
