import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeQuestion } from "../store/slices/createQuizSlice";

export const QuestionInput = (props) => {
  const { text, type } = useSelector((state) =>
    state.createQuiz.questions.find((question) => question.id === props.id)
  );
  const dispatch = useDispatch();
  return (
    <>
      <div className="question-input-block">
        <label>
          Question
          <input type="text" value={text} />
        </label>
        <label>
          Type
          <select name="qustion-type" value={props?.selectedValue || "text"}>
            <option value="text">Text</option>
            <option value="single-choice">Single choice</option>
            <option value="multiple-choices">Multiple choice</option>
          </select>
        </label>
        <button onClick={() => dispatch(removeQuestion({ id: props.id }))}>
          Remove
        </button>
      </div>
    </>
  );
};
