import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { QuestionInput } from "./QuestionInput";
import { AnswersList } from "./AnswersList";
import { addQuestion } from "../store/slices/createQuizSlice";

export const QuestionList = () => {
  const questions = useSelector((state) => state.createQuiz.questions);
  const dispatch = useDispatch();
  const handleClick = () => dispatch(addQuestion());

  return (
    <>
      <ol>
        {questions.map((question) => (
          <li key={question.id}>
            <div className="question-data-container">
              <QuestionInput {...question} />
              <AnswersList {...question} />
            </div>
          </li>
        ))}
      </ol>
      <button onClick={handleClick}>Add question</button>
    </>
  );
};
