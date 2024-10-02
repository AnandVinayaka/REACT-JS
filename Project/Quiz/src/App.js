import HomePage from "./HomePage/HomePage.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminSignUp from "./AdminSingnUp/AdminSignUp.js";
import AdminLogIn from "./AdminLogin/AdminLogin.js";
import AdminDashboardFunction from "./AdminDashboard/AdminDashboard.js";
import Context from "./Context/Context.js";
import { useState } from "react";
import CreateQuiz from "./AdminDashboard/CreateQuiz.js";
import ViewResults from "./AdminDashboard/ViewResults.js";
import UserSignUp from "./UserSignUp/UserSignUp.js";
import UserLogIn from "./UserLogIn/UserLogIn.js";
import UserDashboard from "./UserDashboard/UserDashboard.js";
import CssQuiz from "./UserDashboard/CssQuiz.js";
import HtmlQuiz from "./UserDashboard/HtmlQuiz.js";
import JsQuiz from "./UserDashboard/JsQuiz.js";
import ReactQuiz from "./UserDashboard/ReactQuiz.js";

function App() {
  const [globalUser, setGlobalUser] = useState({
    Username: "",
    Email: "",
    Dropdown: "",
  });
  return (
    <>
      <BrowserRouter>
        <Context.Provider
          value={{ globalUser: globalUser, setGlobalUser: setGlobalUser }}>
          <Routes>
            <Route path="/" element={<HomePage></HomePage>}></Route>
            <Route
              path="/adminSignUp"
              element={<AdminSignUp></AdminSignUp>}></Route>
            <Route
              path="/userSignUp"
              element={<UserSignUp></UserSignUp>}></Route>
            <Route
              path="/adminLogin"
              element={<AdminLogIn></AdminLogIn>}></Route>
            <Route path="/userLogin" element={<UserLogIn></UserLogIn>}></Route>
            <Route
              path="/adminDashboard"
              element={
                <AdminDashboardFunction></AdminDashboardFunction>
              }></Route>
            <Route
              path="/userDashboard"
              element={<UserDashboard></UserDashboard>}></Route>
            <Route
              path="/createQuiz"
              element={<CreateQuiz></CreateQuiz>}></Route>
            <Route
              path="/viewResults"
              element={<ViewResults></ViewResults>}></Route>
            <Route path="/cssQuiz" element={<CssQuiz></CssQuiz>}></Route>
            <Route path="/htmlQuiz" element={<HtmlQuiz></HtmlQuiz>}></Route>
            <Route path="/jsQuiz" element={<JsQuiz></JsQuiz>}></Route>
            <Route path="/reactQuiz" element={<ReactQuiz></ReactQuiz>}></Route>
          </Routes>
        </Context.Provider>
      </BrowserRouter>
    </>
  );
}
export default App;
