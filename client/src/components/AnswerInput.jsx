import React from "react";
import { useDispatch } from "react-redux";
import { removeAnswer, setAnswerText } from "../store/slices/createQuizSlice";

export const AnswerInput = ({ questionId, text, id }) => {
  const dispatch = useDispatch();
  const handleChange = (e) =>
    dispatch(setAnswerText({ questionId, id, answerText: e.target.value }));

  const handleClick = () => dispatch(removeAnswer({ questionId, id }));

  return (
    <div className="answer-input-container">
      <div className="answer-input-item">
        <label htmlFor="answer">Answer</label>
        <textarea id="answer" value={text} onChange={handleChange} />
      </div>
      <button className="remove-btn" onClick={handleClick}>
        Remove
      </button>
    </div>
  );
};
