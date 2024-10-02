import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Context from "../Context/Context";
import { useNavigate } from "react-router-dom";
import "./quiz.css";

const ReactQuiz = () => {
  const [results, setResults] = useState([]);
  const [answer, setAnswer] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  const perPage = 1;
  let noOfPages = results.length;
  const { globalUser } = useContext(Context);
  const [showResults, setText] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3001/react")
      .then((res) => setResults(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleHome = () => {
    navigate("/");
  };

  const handleBack = () => {
    navigate("/userDashboard");
  };

  const handleAnswer = (e) => {
    setAnswer(e.target.value);
  };

  const handleNext = () => {
    const newAnswer = answer;
    if (newAnswer) {
      handleResult();
      setCurrentPage(currentPage + 1);
    } else {
      alert("You did not answered this question");
      setCurrentPage(currentPage + 1);
      if (currentPage === noOfPages) {
        setText(false);
      }
    }
  };

  const handleResult = () => {
    if (currentPage === noOfPages) {
      axios.post("http://localhost:3001/results", {
        count: count + 1,
        Username: globalUser.Username,
        Mail: globalUser.Email,
        Tech: "react",
      });
      setText(false);
    }
    if (answer) {
      axios
        .get(`http://localhost:3001/react?Answer=${answer}`)
        .then((res) => {
          const answerData = res.data.find((item) => item.Answer === answer);
          if (answerData) {
            console.log("answer found");
            setCount(count + 1);
          } else {
            console.log("answer not found");
          }
        })
        .catch((err) => console.log(err));
      setCurrentPage(currentPage + 1);
    } else {
      alert("Please select any option");
    }
  };

  const getPaginatedData = () => {
    const startIndex = (currentPage - 1) * perPage;
    const endIndex = startIndex + perPage;
    return results.slice(startIndex, endIndex);
  };

  return (
    <>
      <div className="main-div">
        <div className="userDashboard">
          <div className="userDetails">
            <p>
              Username : <strong>{globalUser.Username}</strong>
            </p>
            <p>
              Email : <strong>{globalUser.Email}</strong>
            </p>
            <div>
              <button onClick={(e) => handleBack(e)}> Dashboard</button>
            </div>
            <div>
              <button onClick={() => navigate("/userLogin")}>Logout</button>
            </div>
          </div>
        </div>
        <div className="mcq">
          {results ? (
            showResults ? (
              getPaginatedData().map((item) => (
                <>
                  <h2 className="ques">
                    Question {currentPage}: {item.Question}
                  </h2>
                  <div className="options">
                    <label className="label">
                      <input
                        type="radio"
                        value={item.Option1}
                        name="option"
                        checked={answer === item.Option1}
                        onChange={(e) => handleAnswer(e)}
                        className="option"></input>
                      {item.Option1}
                    </label>
                    <label className="label">
                      <input
                        type="radio"
                        value={item.Option2}
                        name="option"
                        checked={answer === item.Option2}
                        onChange={(e) => handleAnswer(e)}
                        className="option"></input>
                      {item.Option2}
                    </label>
                    <label className="label">
                      <input
                        type="radio"
                        value={item.Option3}
                        name="option"
                        checked={answer === item.Option3}
                        onChange={(e) => handleAnswer(e)}
                        className="option"></input>
                      {item.Option3}
                    </label>
                    <label className="label">
                      <input
                        type="radio"
                        value={item.Option4}
                        name="option"
                        checked={answer === item.Option4}
                        onChange={(e) => handleAnswer(e)}
                        className="option"></input>
                      {item.Option4}
                    </label>
                  </div>
                  <button
                    onClick={() => handleResult()}
                    disabled={currentPage === noOfPages + 1}
                    className="submit">
                    Submit
                  </button>
                  <button onClick={() => handleNext()} className="skip">
                    Skip
                  </button>
                </>
              ))
            ) : (
              <div className="result">
                <h3>
                  Answered {count} of {noOfPages}
                </h3>
                <h3>Total Score : {count}</h3>
                {console.log("it is hitting")}
              </div>
            )
          ) : (
            <p>No questions available</p>
          )}
        </div>
      </div>
    </>
  );
};

export default ReactQuiz;
