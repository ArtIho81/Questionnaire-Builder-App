import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { QuestionInput } from "./QuestionInput";
import { AnswersList } from "./AnswersList";
import { addQuestion } from "../store/slices/createQuizSlice";

export const QuestionList = () => {
  const { name, questions } = useSelector((state) => state.createQuiz);
  const dispatch = useDispatch();
  const handleClick = () => dispatch(addQuestion());

  return (
    <>
      <ol>
        {questions.map((question) => (
          <li key={question.id}>
              <QuestionInput {...question} />
              <AnswersList {...question} />
          </li>
        ))}
      </ol>
      {name && <button onClick={handleClick}>Add question</button>}
    </>
  );
};
