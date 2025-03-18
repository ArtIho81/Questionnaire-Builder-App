import React from "react";
import { useDispatch} from "react-redux";
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
    <>
      <div className="question-input-block">
        <label>
          Question
          <input type="text" value={text} onChange={handleChange} />
        </label>
        <label>
          Type
          <QuestionTypeSelect type={type} id={id} />
        </label>
        <button onClick={handleClick}>Remove</button>
      </div>
    </>
  );
};
