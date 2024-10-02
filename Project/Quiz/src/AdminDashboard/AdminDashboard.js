import { useContext, useEffect } from "react";
import Context from "../Context/Context";
import { useNavigate, Link } from "react-router-dom";
import "./AdminDashboard.css";

function AdminDashboardFunction() {
  const { globalUser } = useContext(Context);
  const navigate = useNavigate();
  return (
    <>
      <div className="adminDashboard">
        <div className="adminDetails">
          <p>
            Username : <strong>{globalUser.Username}</strong>
          </p>
          <p>
            Email : <strong>{globalUser.Email}</strong>
          </p>
          <div>
            <button onClick={() => navigate("/adminLogin")}>Logout</button>
          </div>
        </div>
        <div className="admin-links">
          <h2>
            <Link className="links" to="/createQuiz">
              Create quiz
            </Link>
          </h2>
          <h2>
            <Link className="links" to="/viewResults">
              View results
            </Link>
          </h2>
        </div>
      </div>
    </>
  );
}

export default AdminDashboardFunction;
