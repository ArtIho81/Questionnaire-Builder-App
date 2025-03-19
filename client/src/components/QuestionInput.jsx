import React from "react";
import { useDispatch } from "react-redux";
import {
  removeQuestion,
  setQuestionText,
} from "../store/slices/createQuizSlice";
import { QuestionTypeSelect } from "./QuestionTypeSelect";

export const QuestionInput = ({ id, text, type }) => {
  const dispatch = useDispatch();

  const handleChange = (e) =>
    dispatch(setQuestionText({ id, questionText: e.target.value }));

  const handleClick = () => dispatch(removeQuestion({ id }));

  return (
    <div className="question-input-container">
      <div className="question-input-item">
        <label htmlFor="question">Question</label>
        <textarea id="question" value={text} onChange={handleChange} />
      </div>
      <div className="question-input-actions">
        <QuestionTypeSelect type={type} id={id} />
        <button className="remove-btn" onClick={handleClick}>Remove</button>
      </div>
    </div>
  );
};
