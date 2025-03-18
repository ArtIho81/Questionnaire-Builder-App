import React from "react";
import { AnswerInput } from "./AnswerInput";
import { addAnswer } from "../store/slices/createQuizSlice";

export const AnswersList = (props) => {
  
  return (
    <>
      <ol>
        {props.answers.map((answer) => (
          <li key={answer.id}>
            <AnswerInput />
          </li>
        ))}
      </ol>
      {props.type !== "text" && (
        <button onClick={() => dispatch(addAnswer({ id: props.id }))}>
          Add answer
        </button>
      )}
    </>
  );
};
