import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Context from "../Context/Context";
import "./UserDashboard.css";

function UserDashboard() {
  const { globalUser, _ } = useContext(Context);
  const navigate = useNavigate();

  return (
    <>
      <div className="userDashboard">
        <div className="userDetails">
          <p>
            Username : <strong>{globalUser.Username}</strong>
          </p>
          <p>
            Email : <strong>{globalUser.Email}</strong>
          </p>
          <div>
            <button onClick={() => navigate("/userLogin")}>Logout</button>
          </div>
        </div>
        <div className="user-links">
          <h2>
            Welcome <br></br>
            <strong>{globalUser.Username}</strong>,<br></br> Choose a
            technology...
          </h2>
          <div className="allLinks">
            <Link className="linkss" to="/reactQuiz">
              REACT QUIZ
            </Link>
            <Link className="linkss" to="/htmlQuiz">
              HTML QUIZ
            </Link>
            <Link className="linkss" to="/CssQuiz">
              CSS QUIZ
            </Link>
            <Link className="linkss" to="/jsQuiz">
              JAVASCRIPT QUIZ
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserDashboard;
