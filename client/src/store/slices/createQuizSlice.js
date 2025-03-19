import { createSlice } from "@reduxjs/toolkit";

const initialQuestionData = {
  id: Date.now(),
  text: "",
  type: "text",
  answers: [
    {
      id: Date.now(),
      text: "",
    },
  ],
};
const initialState = {
  name: "",
  desc: "",
  questions: [],
};

const createQuizSlice = createSlice({
  name: "createQuiz",
  initialState,
  reducers: {
    createNewQuiz: (state, actions) => {
      state.name = actions.payload.name;
      state.desc = actions.payload.desc;
    },

    addQuestion: (state) => {
      state.questions.push({ ...initialQuestionData, id: Date.now() });
    },

    setQuestionText: (state, actions) => {
      state.questions.find(
        (question) => question.id === actions.payload.id
      ).text = actions.payload.questionText;
    },

    setQuestionType: (state, actions) => {
      state.questions.find(
        (question) => question.id === actions.payload.id
      ).type = actions.payload.type;
    },

    removeQuestion: (state, actions) => {
      state.questions = state.questions.filter(
        (question) => question.id !== actions.payload.id
      );
    },

    addAnswer: (state, actions) => {
      state.questions
        .find((question) => question.id === actions.payload.id)
        .answers.push({
          id: Date.now(),
          text: "",
        });
    },

    setAnswerText: (state, actions) => {
      const question = state.questions.find(
        (question) => question.id === actions.payload.id
      );
      question.answers.find((answer) => answer.id === actions.payload.id).text =
        actions.payload.answertext;
    },

    removeAnswer: (state, actions) => {
      const question = state.questions.find(
        (question) => question.id === actions.payload.questionId
      );
      question.answers = question.answers.filter(
        (answer) => answer.id !== actions.payload.id
      );
    },
  },
});

export const {
  createNewQuiz,
  addAnswer,
  addQuestion,
  removeQuestion,
  setQuestionText,
  setQuestionType,
  setAnswerText,
  removeAnswer,
} = createQuizSlice.actions;

export default createQuizSlice.reducer;
