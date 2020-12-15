import React, { useContext, useState } from "react";
import { QuizContext } from "./QuestionContext";
import { ScoreContext } from "./ScoreContext";

const Quiz = () => {
  const [qs] = useContext(QuizContext);
  const [total, setTotal] = useContext(ScoreContext);
  const [chosenA, setChosenA] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [qPerPage] = useState(1);
  const [corAs, setCorAs] = useState(0);

  const indexOfLastQ = currentPage * qPerPage;
  const indexOfFirstQ = indexOfLastQ - qPerPage;
  const currentQ = qs.slice(indexOfFirstQ, indexOfLastQ);
  const totalPages = qs.length / qPerPage;

  const changeHandler = (e) => {
    setChosenA(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setCurrentPage(currentPage + 1);
    const [check] = qs.map((a) => a.CA);
    console.log(check);
    if (check === chosenA) {
      setTotal(total + 10);
      setCorAs(corAs + 1);
    }
  };

  return (
    <div>
      <h1>Play Quiz</h1>
      {currentPage > totalPages && currentPage > 1
        ? `Your Score is ${total}. You answered ${corAs}/${totalPages}`
        : "Set questions and play quiz."}
      {currentQ.map((Q, i) => {
        return (
          <form key={i} onSubmit={submitHandler}>
            <p>
              {Q.Qn}) {Q.Q}
            </p>
            <input
              type="radio"
              id="male"
              name="gender"
              onChange={changeHandler}
              value={Q.A1}
            />
            <label htmlFor={Q.A1}> {Q.A1}</label>
            <br />
            <input
              type="radio"
              id="male"
              name="gender"
              onChange={changeHandler}
              value={Q.A2}
            />
            <label htmlFor={Q.A2}> {Q.A2}</label>
            <br />
            <input
              type="radio"
              id="female"
              name="gender"
              onChange={changeHandler}
              value={Q.A3}
            />
            <label htmlFor={Q.A3}> {Q.A3}</label>
            <br />
            <input
              type="radio"
              id="other"
              name="gender"
              onChange={changeHandler}
              value={Q.A4}
            />
            <label htmlFor={Q.A4}> {Q.A4}</label>
            <br />
            <input type="submit" value="Submit" />
          </form>
        );
      })}
    </div>
  );
};
export default Quiz;
