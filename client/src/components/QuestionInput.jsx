import React from "react";
import { useDispatch } from "react-redux";
import {
  removeQuestion,
  setQuestionData,
} from "../store/slices/createQuizSlice";
import { QuestionTypeSelect } from "./QuestionTypeSelect";
import { LabeledTextArea } from "./LabeledTextArea";

export const QuestionInput = ({ id, text, type }) => {
  const dispatch = useDispatch();

  const handleChange = (e) =>
    dispatch(
      setQuestionData({
        id,
        value: e.target.value,
        input: e.target.dataset.input,
      })
    );

  const handleClick = () => dispatch(removeQuestion({ id }));

  return (
    <div className="question-input-container">
      <LabeledTextArea
        dataInput="text"
        label="Question"
        className="question-input-item"
        id={`question${id}`}
        value={text}
        onChange={handleChange}
      />
      <div className="question-input-actions">
        <QuestionTypeSelect
          id={`question-type${id}`}
          dataInput="type"
          value={type}
          onChange={handleChange}
        />
        <button className="remove-btn" onClick={handleClick}>
          Remove
        </button>
      </div>
    </div>
  );
};
