import { useContext, useState } from "react";
import CreateQuizquestions from "./CreateQuizquestions";
import { useNavigate } from "react-router-dom";
import Context from "../Context/Context";
import "./CreateQuiz.css";

const CreateQuiz = () => {
  const [dropDownValue, setDropDownValue] = useState(null);
  const [pages, setPages] = useState("");
  const [createQuiz, setCreateQuiz] = useState(false);
  const navigate = useNavigate();
  const { globalUser } = useContext(Context);

  let array = Array.from({ length: pages }, (_, i) => i + 1);

  const handledropdown = (e) => {
    setDropDownValue(e.target.value);
  };

  const handleBack = () => {
    navigate("/adminDashboard"); // Redirects to AdminDashboard
  };

  const handlePage = (e) => {
    e.preventDefault();
    if (dropDownValue) {
      if (pages > 0) {
        setCreateQuiz(true); // Start creating the quiz
      } else {
        alert("Please select Questions");
      }
    } else {
      alert("Please select technology");
    }
  };

  const handleCreateQuiz = () => {
    setCreateQuiz(false);
  };

  const handleques = (e) => {
    e.preventDefault();
    setPages(e.target.value);
  };

  return (
    <>
      <div className="mainDiv">
        <div className="admin-details">
          <p>
            Username : <strong>{globalUser.Username}</strong>
          </p>
          <p>
            Email : <strong>{globalUser.Email}</strong>
          </p>
          <button onClick={handleBack} className="go-back-button">
            Go Back
          </button>
          <div>
            <button onClick={() => navigate("/")}>Logout</button>
          </div>
        </div>

        <div className="questionSection">
          {!createQuiz && (
            <>
              <div>
                <select
                  onChange={(e) => handledropdown(e)}
                  className="dropdown">
                  <option selected disabled>
                    Select tech
                  </option>
                  <option value="React">React</option>
                  <option value="HTML">HTML</option>
                  <option value="css">CSS</option>
                  <option value="js">JavaScript</option>
                </select>
              </div>
              Number of questions? :{" "}
              <input
                type="text"
                onChange={(e) => handleques(e)}
                className="dropdownText"
              />
              <button
                type="submit"
                onClick={(e) => handlePage(e)}
                className="submit-button">
                Submit
              </button>
            </>
          )}

          {createQuiz && (
            <CreateQuizquestions
              totalPages={array}
              perPage={1}
              dropDownValue={dropDownValue}
              createQuizValue={handleCreateQuiz}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default CreateQuiz;
