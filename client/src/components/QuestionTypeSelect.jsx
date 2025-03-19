import React from "react";
import { useDispatch } from "react-redux";
import { setQuestionType } from "../store/slices/createQuizSlice";

export const QuestionTypeSelect = ({ id, type }) => {
  const dispatch = useDispatch();
  const handleChange = (e) =>
    dispatch(setQuestionType({ id, type: e.target.value }));

  return (
    <div>
      <label htmlFor="question-type">Type</label>
      <select id="question-type" value={type} onChange={handleChange}>
        <option value="text">Text</option>
        <option value="single-choice">Single choice</option>
        <option value="multiple-choices">Multiple choice</option>
      </select>
    </div>
  );
};
