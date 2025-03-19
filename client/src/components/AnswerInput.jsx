import React from "react";
import { useDispatch } from "react-redux";
import { removeAnswer, setAnswerText } from "../store/slices/createQuizSlice";
import { LabeledTextArea } from "./LabeledTextArea";

export const AnswerInput = ({ questionId, text, id }) => {
  const dispatch = useDispatch();
  const handleChange = (e) =>
    dispatch(setAnswerText({ questionId, id, answerText: e.target.value }));

  const handleClick = () => dispatch(removeAnswer({ questionId, id }));

  return (
    <div className="answer-input-container">
      <LabeledTextArea
        label="Answer"
        className="answer-input-item"
        id={`answer${id}`}
        value={text}
        onChange={handleChange}
      />
      <button className="remove-btn" onClick={handleClick}>
        Remove
      </button>
    </div>
  );
};
