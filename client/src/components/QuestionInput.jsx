import React from "react";
import { useDispatch, useSelector } from "react-redux";

export const QuestionInput = (props) => {
  const value = useSelector(
    (state) =>
      state.createQuiz.questions.find((question) => question.id === props.id)
        .text
  );
  const type = useSelector(
    (state) =>
      state.createQuiz.questions.find((question) => question.id === props.id)
        .text
  );
  const dispatch = useDispatch();
  return (
    <>
      <div className="question-input-block">
        <label>
          Question
          <input type="text" value={value} />
        </label>
        <label>
          Type
          <select name="qustion-type" value={props?.selectedValue || "text"}>
            <option value="text">Text</option>
            <option value="single-choice">Single choice</option>
            <option value="multiple-choices">Multiple choice</option>
          </select>
        </label>
        <button onClick={() => props.onRemove(props.id)}>Remove</button>
      </div>
    </>
  );
};
