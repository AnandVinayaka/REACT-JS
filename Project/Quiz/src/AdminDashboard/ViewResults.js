import { useContext, useEffect, useState } from "react";
import Context from "../Context/Context";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./ViewResults.css";

const ViewResults = () => {
  const { globalUser } = useContext(Context);
  const [result, setResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3001/results")
      .then((res) => setResults(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleBack = (e) => {
    navigate("/adminDashboard");
  };

  return (
    <>
      <hr></hr>
      <div className="mainDiv">
        <div className="admin-details">
          <p>Username : {globalUser.Username}</p>
          <p>Email : {globalUser.Email}</p>
          <div>
            <button onClick={(e) => handleBack(e)}>Go back</button>
          </div>
        </div>
        <div className="results">
          {result.map((item) => (
            <div className="individualResults">
              <p>
                Username: <strong>{item.Username}</strong>
              </p>
              <p>
                E-mail: <strong>{item.Mail}</strong>
              </p>
              <p>
                Technology: <strong>{item.techno}</strong>
              </p>
              <p>
                Score: <strong>{item.count}</strong>
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ViewResults;
