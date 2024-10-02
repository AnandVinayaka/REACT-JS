import { useContext, useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Context from "../Context/Context";
import { useNavigate } from "react-router-dom";
import AdminDashboardFunction from "../AdminDashboard/AdminDashboard";
import "./Login.css";

function AdminLogIn() {
  const [adminData, setadminData] = useState([]);
  const [errorBox, seterrorBox] = useState();
  const [errorPassword, seterrorPassword] = useState();
  const [passwordVisible, setpasswordVisible] = useState(false);
  const [errorName, seterrorName] = useState();
  const [name, setName] = useState();
  const [email, setemail] = useState("");
  const [errorEmail, seterrorEmail] = useState("");
  const [adminId, setAdminId] = useState();

  const [password, setPassword] = useState();
  const { _, setGlobalUser } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3001/AdminLoginDetails")
      .then((res) => {
        setadminData(res.data);
        console.log("res", res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (e, keyword) => {
    if (keyword === "name") {
      setName(e.target.value);
      //console.log(e.target.value)
    } else if (keyword === "password") {
      setPassword(e.target.value);
    } else if (keyword === "email") {
      setemail(e.target.value);
    }
  };
  const handleClick = (e) => {
    e.preventDefault();
    if (
      name &&
      password &&
      errorName === "" &&
      errorPassword === "" &&
      email &&
      errorEmail === ""
    ) {
      const filteredResult = adminData.filter(
        (item) =>
          // console.log(item.adminname)
          // console.log(item.adminpassword)
          item.adminname === name && item.adminpassword === password
      );
      console.log("filteredResult", filteredResult);

      if (filteredResult.length === 1) {
        console.log("filteredResult", filteredResult);
        if (
          filteredResult[0].adminname === name &&
          filteredResult[0].adminpassword === password
        ) {
          setAdminId(filteredResult[0].id);
          console.log(filteredResult[0].id);
          setGlobalUser({
            Username: name,
            Email: email,
          });
          navigate("/adminDashboard");
        }
      } else {
        console.log("else part");
        const usernamechecking = adminData.some(
          (item) => item.adminname === name
        );
        const passwordchecking = adminData.some(
          (item) => item.adminpassword === password
        );

        if (usernamechecking === false && passwordchecking === true) {
          seterrorName("Please enter correct username");
        } else if (usernamechecking === true && passwordchecking === false) {
          seterrorPassword("Please enter the correct password");
        } else {
          navigate("/adminSignUp");
        }
      }
    } else {
      if (!name) {
        seterrorName("please enter the name");
      } else {
        seterrorName("");
      }
      if (!email) {
        seterrorEmail("please enter the password");
      } else {
        seterrorEmail("");
      }
      if (!password) {
        seterrorPassword("please enter the password");
      } else {
        seterrorPassword("");
      }
    }
  };
  const togglePasswordVisibility = () => {
    setpasswordVisible(!passwordVisible);
  };
  return (
    <>
      <div className="main">
        <div>
          <form>
            <h1>Hey 'ADMIN' welcome...</h1>
            <div className="loginpage">
              <div className="form-container">
                <div>
                  <label className="heading" htmlFor="name">
                    Name :
                  </label>
                  <input
                    className="inputbox"
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    onChange={(e) => handleChange(e, "name")}
                  />
                  <p>{errorName}</p>
                </div>
                <div>
                  <label className="heading" htmlFor="email">
                    Email :
                  </label>
                  <input
                    className="inputbox"
                    type="text"
                    id="signupemail"
                    placeholder="Enter your email"
                    onChange={(e) => handleChange(e, "email")}
                  />
                  <p>{errorEmail}</p>
                </div>
                <div>
                  <label className="heading" htmlFor="password">
                    Password :
                  </label>
                  <div>
                    <input
                      className="inputbox"
                      type={passwordVisible ? "text" : "password"}
                      id="password"
                      placeholder="Enter your Password"
                      onChange={(e) => handleChange(e, "password")}
                    />
                    <span onClick={togglePasswordVisibility}>
                      {passwordVisible ? "🙈" : "🐵"}
                    </span>
                  </div>
                  <p>{errorPassword}</p>
                </div>
                <div className="button-container">
                  <button className="btn" onClick={(e) => handleClick(e)}>
                    Login
                  </button>
                  <button className="btn" onClick={() => navigate("/")}>
                    Home
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default AdminLogIn;
