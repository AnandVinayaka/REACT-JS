import axios from "axios";
import { useState } from "react";

const CreateQuizquestions = (props) => {
  const { totalPages, perPage, dropDownValue, createQuizValue } = props;
  const totalPagesInNumber = totalPages.length;
  const [currentPage, setCurrentPage] = useState(1);
  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [answer, setAnswer] = useState("");
  const [updateValue, setUpdateValue] = useState(totalPagesInNumber + 1);

  const getPaginatedData = (currentPage) => {
    const startIndex = (currentPage - 1) * perPage;
    const endIndex = startIndex + perPage;
    return totalPages.slice(startIndex, endIndex);
  };

  const handleNextPage = (e) => {
    if (currentPage < totalPagesInNumber) {
      setCurrentPage(currentPage + 1);
    } else {
      console.log("it is in else part");
      createQuizValue();
    }
  };

  const handleTextValues = (e, keyword) => {
    e.preventDefault();
    if (keyword === "question") {
      setQuestion(e.target.value);
    } else if (keyword === "option1") {
      setOption1(e.target.value);
    } else if (keyword === "option2") {
      setOption2(e.target.value);
    } else if (keyword === "option3") {
      setOption3(e.target.value);
    } else if (keyword === "option4") {
      setOption4(e.target.value);
    } else {
      setAnswer(e.target.value);
    }
  };

  const resetFun = () => {
    setQuestion("");
    setAnswer("");
    setOption1("");
    setOption2("");
    setOption3("");
    setOption4("");
  };

  const handleSubmitQues = (e) => {
    const obj = {
      Question: question,
      Option1: option1,
      Option2: option2,
      Option3: option3,
      Option4: option4,
      Answer: answer,
    };
    if (dropDownValue === "React") {
      axios
        .post("http://localhost:3001/react", obj)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
      resetFun();
      handleNextPage(e);
    } else if (dropDownValue === "HTML") {
      axios
        .post("http://localhost:3001/html", obj)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
      resetFun();
      handleNextPage(e);
    } else if (dropDownValue === "js") {
      axios
        .post("http://localhost:3001/javascript", obj)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
      resetFun();
      handleNextPage(e);
    } else {
      axios
        .post("http://localhost:3001/css", obj)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
      resetFun();
      handleNextPage(e);
    }
  };

  const paginatedData = getPaginatedData(currentPage);

  return (
    <>
      {paginatedData.map((item, index) => (
        <form className="Ques-form">
          <label>Question {currentPage}</label>
          <input
            type="text"
            key={index}
            value={question}
            placeholder="Question?"
            onChange={(e) => handleTextValues(e, "question")}
            className="question"></input>

          <input
            type="text"
            className="Option"
            value={option1}
            placeholder="(a)"
            onChange={(e) => handleTextValues(e, "option1")}></input>
          <input
            type="text"
            className="Option"
            value={option2}
            placeholder="(b)"
            onChange={(e) => handleTextValues(e, "option2")}></input>
          <input
            type="text"
            className="Option"
            value={option3}
            placeholder="(c)"
            onChange={(e) => handleTextValues(e, "option3")}></input>
          <input
            type="text"
            className="Option"
            value={option4}
            placeholder="(d)"
            onChange={(e) => handleTextValues(e, "option4")}></input>

          <input
            type="text"
            className="Option"
            value={answer}
            placeholder="Correct answer"
            onChange={(e) => handleTextValues(e, "Answer")}></input>
        </form>
      ))}
      <button
        onClick={(e) => handleSubmitQues(e)}
        className="Ques-submit"
        disabled={currentPage === updateValue}>
        Submit
      </button>
      <button
        onClick={(e) => handleNextPage(e)}
        className="Ques-submit"
        disabled={
          currentPage === totalPagesInNumber || currentPage === updateValue
        }>
        next
      </button>
    </>
  );
};

export default CreateQuizquestions;
