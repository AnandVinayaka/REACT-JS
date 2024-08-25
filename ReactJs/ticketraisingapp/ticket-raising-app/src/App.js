import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import UserSide from "./components/UserSide";
import AdminSide from "./components/AdminSide";
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/userside" element={<UserSide></UserSide>}></Route>
        <Route path="/adminside" element={<AdminSide></AdminSide>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
