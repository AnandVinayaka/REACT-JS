import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./SignUp.css";

function AdminSignUp() {
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorEmail, seterrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [number, setnumber] = useState();
  const [errorNumber, seterrorNumber] = useState();
  const [successfulmsg, setSuccessfulmsg] = useState("");
  const [create, setCreate] = useState("please create an account!");
  const [adminData, setadminData] = useState([]);
  const [adminPhoto, setAdminPhoto] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:3001/AdminLoginDetails")
      .then((res) => {
        setadminData(res.data);
        console.log("res", res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const navigate = useNavigate();
  const handleChange = (e, keyword) => {
    e.preventDefault();
    if (keyword === "name") {
      setName(e.target.value);
    }
    if (keyword === "password") {
      setPassword(e.target.value);
    }
    if (keyword === "email") {
      setemail(e.target.value);
    }
    if (keyword === "number") {
      setnumber(e.target.value);
    }
    if (keyword === "photo") {
      console.log(e.target.files);
      setAdminPhoto(console.log(e.target.files[0]));
    }
  };
  const handleClick = (e) => {
    e.preventDefault();

    const mobilenumrgx = /[7-9]\d{9}/;
    const passwordrgx = /^\d{6}/;
    adminData.map((item) => {
      const isin = item.adminpassword === password;
      console.log("item.adminpassword", password in item);
      if (!isin) {
        if (mobilenumrgx.test(number) && passwordrgx.test(password)) {
          if (
            name &&
            password &&
            email &&
            number &&
            errorName === "" &&
            errorPassword === "" &&
            errorEmail === "" &&
            errorNumber === ""
          ) {
            if (number.length === 10 && password.length === 6) {
              axios
                .post("http://localhost:3001/AdminLoginDetails", {
                  adminname: name,
                  adminpassword: password,
                  adminemail: email,
                  adminnumber: number,
                })
                .then((res) => {
                  console.log(res.data);
                })
                .catch((error) => console.log(error));
              setSuccessfulmsg("You've created your account successfully!");
              navigate("/adminLogin");
            } else {
              if (!(number.length === 10)) {
                seterrorNumber(
                  `the phone number must be 10 digits you enter ${number.length}`
                );
              } else {
                seterrorNumber("");
              }
              if (!(password.length === 6)) {
                setErrorPassword(
                  `the password must be 6 digits you enter ${password.length}`
                );
              } else {
                setErrorPassword("");
              }
            }
          } else {
            if (!name) {
              setErrorName("please enter the name");
            } else {
              setErrorName("");
            }
            if (!password) {
              setErrorPassword("please enter the password");
            } else {
              setErrorPassword("");
            }
            if (!email) {
              seterrorEmail("please enter the email");
            } else {
              seterrorEmail("");
            }
            if (!number) {
              seterrorNumber("please enter the Phone Number");
            } else {
              seterrorNumber("");
            }
          }
        } else {
          if (!mobilenumrgx.test(number)) {
            seterrorNumber("mobile number is invalid");
          } else {
            seterrorNumber("");
          }
          if (!passwordrgx.test(password)) {
            setErrorPassword("password is invalid");
          } else {
            setErrorPassword("");
          }
        }
      }
    });
  };

  return (
    <>
      <div className="signuppage">
        <div>
          <div>
            <form>
              <div className="container">
                <div className="form">
                  <h1 className="signupheading">Hello admin!</h1>
                  <div>
                    <label className="heading" htmlFor="name">
                      Name :
                    </label>
                    <br></br>
                    <input
                      type="text"
                      id="signupname"
                      placeholder="Enter your name"
                      onChange={(e) => handleChange(e, "name")}
                    />
                    <p>{errorName}</p>
                  </div>
                  <div>
                    <label className="heading" htmlFor="email">
                      {" "}
                      Email{" "}
                    </label>
                    <br></br>
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
                    <br></br>
                    <input
                      type="password"
                      id="signuppassword"
                      placeholder="Enter your Password"
                      onChange={(e) => handleChange(e, "password")}
                    />
                    <p>{errorPassword}</p>
                  </div>
                  <div>
                    <label className="heading" htmlFor="number">
                      Mobile Number :
                    </label>
                    <br></br>
                    <input
                      type="text"
                      id="signupnumber"
                      placeholder="Enter Your  Phone Number"
                      onChange={(e) => handleChange(e, "number")}
                    />
                    <p>{errorNumber}</p>
                  </div>

                  <div className="button-box">
                    <button
                      className="createbutton"
                      onClick={(e) => handleClick(e)}>
                      Create Account
                    </button>
                    <button
                      className="createbutton"
                      onClick={() => navigate("/")}>
                      Home
                    </button>
                  </div>
                  <p>{successfulmsg}</p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default AdminSignUp;
