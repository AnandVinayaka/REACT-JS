import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LoginPage from "./components/LoginPage";
import UserTickets from "./components/UserTickets";
import AdminTickets from "./components/AdminTickets";
import TicketDetails from "./components/TicketDetails";

function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage></LoginPage>}></Route>
        <Route path="/" element={<UserTickets></UserTickets>}></Route>
        <Route path="/" element={<AdminTickets></AdminTickets>}></Route>
        <Route path="/" element={<TicketDetails></TicketDetails>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
