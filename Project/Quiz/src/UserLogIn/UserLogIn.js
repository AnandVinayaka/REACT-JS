import { useContext, useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Context from "../Context/Context";
import { useNavigate } from "react-router-dom";

function UserLogIn() {
  const [userData, setuserData] = useState([]);
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
      .get("http://localhost:3001/UserLoginDetails")
      .then((res) => {
        setuserData(res.data);
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
      const filteredResult = userData.filter(
        (item) =>
          // console.log(item.adminname)
          // console.log(item.adminpassword)
          item.username === name && item.userpassword === password
      );
      console.log("filteredResult", filteredResult);

      if (filteredResult.length === 1) {
        console.log("filteredResult", filteredResult);
        if (
          filteredResult[0].username === name &&
          filteredResult[0].userpassword === password
        ) {
          setAdminId(filteredResult[0].id);
          console.log(filteredResult[0].id);
          setGlobalUser({
            Username: name,
            Email: email,
          });
          navigate(`/userDashboard`);
        }
      } else {
        console.log("else part");
        const usernamechecking = userData.some(
          (item) => item.username === name
        );
        const passwordchecking = userData.some(
          (item) => item.userpassword === password
        );

        if (usernamechecking === false && passwordchecking === true) {
          seterrorName("Please enter correct username");
        } else if (usernamechecking === true && passwordchecking === false) {
          seterrorPassword("Please enter the correct password");
        } else {
          navigate("/userSignUp");
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
            <h1>Hey 'USER' welcome...</h1>
            <div className="loginpage">
              <div className="form-container">
                <div>
                  <label className="heading" htmlFor="name">
                    Name :
                  </label>
                  <input
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
                      type={passwordVisible ? "text" : "password"} // Step 3: Toggle input type
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
export default UserLogIn;
