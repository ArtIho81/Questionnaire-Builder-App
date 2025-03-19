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
    setQuizInfo: (state, actions) => {
      const { value, input } = actions.payload;
      state[input] = value;
    },

    addQuestion: (state) => {
      state.questions.push({ ...initialQuestionData, id: Date.now() });
    },

    setQuestionData: (state, actions) => {
      const { id, value, input } = actions.payload;
      state.questions.find((question) => question.id === id)[input] = value;
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
        (question) => question.id === actions.payload.questionId
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
  setQuizInfo,
  addAnswer,
  addQuestion,
  removeQuestion,
  setQuestionData,
  setAnswerText,
  removeAnswer,
} = createQuizSlice.actions;

export default createQuizSlice.reducer;
