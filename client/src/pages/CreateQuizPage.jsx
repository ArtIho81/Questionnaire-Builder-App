import React from "react";
import { CreateQuizInfo } from "../components/CreateQuizInfo.jsx";
import { QuestionList } from "../components/QuestionList.jsx";

export const CreateQuizPage = () => {
  return (
    <div>
      <h1>Create Quiz</h1>
      <CreateQuizInfo />
      <QuestionList />
    </div>
  );
};
