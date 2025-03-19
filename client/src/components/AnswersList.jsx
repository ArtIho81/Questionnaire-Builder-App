import React from "react";
import { AnswerInput } from "./AnswerInput";
import { addAnswer } from "../store/slices/createQuizSlice";
import { useDispatch } from "react-redux";

export const AnswersList = ({ answers, id, type }) => {
  const dispatch = useDispatch();
  const handleClick = () => dispatch(addAnswer({ id }));

  return (
    <>
      <ol>
        {answers.map((answer) => (
          <li key={answer.id}>
            <AnswerInput questionId={id} {...answer} />
          </li>
        ))}
      </ol>
      {type !== "text" && <button onClick={handleClick}>Add answer</button>}
    </>
  );
};
