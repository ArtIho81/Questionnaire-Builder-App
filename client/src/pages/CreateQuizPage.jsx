import React from "react";
import { CreateQuizInfo } from "../components/CreateQuizInfo.jsx";
import { QuestionList } from "../components/QuestionList.jsx";
import { useSelector } from "react-redux";

export const CreateQuizPage = () => {

  return (
    <>
      <h1>Create Quiz</h1>
      <CreateQuizInfo />
      <QuestionList />
    </>
  );
};
