import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { QuestionInput } from "./QuestionInput";
import { AnswersList } from "./AnswersList";
import { addQuestion } from "../store/slices/createQuizSlice";

export const QuestionList = () => {
  const questions = useSelector((state) => state.createQuiz.questions);
  const dispatch = useDispatch();

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
      <button onClick={() => dispatch(addQuestion())}>Add question</button>
    </>
  );
};
