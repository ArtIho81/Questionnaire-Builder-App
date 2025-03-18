import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { QuestionInput } from "../components/QuestionInput";
import { AnswerInput } from "../components/AnswerInput";
import {
  addAnswer,
  addQuestion,
  removeQuestion,
} from "../store/slices/createQuizSlice.js";

export const CreateQuizPage = () => {
  const questionsData = useSelector((state) => state.createQuiz.questions);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    //setQuestionsData((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h1>Create Quiz</h1>
      <ol>
        {questionsData.map((question) => (
          <li key={question.id}>
            <QuestionInput onRemove={handleRemove} {...question} />
            <ol>
              {question.answers.map((answer) => (
                <li key={answer.id}>
                  <AnswerInput />
                </li>
              ))}
            </ol>
            <button onClick={() => dispatch(addAnswer({ id: question.id }))}>
              Add answer
            </button>
          </li>
        ))}
      </ol>
      <button onClick={() => dispatch(addQuestion())}>Add question</button>
    </div>
  );
};
