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
  questions: [initialQuestionData],
};

const createQuizSlice = createSlice({
  name: "createQuiz",
  initialState,
  reducers: {
    addQuestion: (state) => {
      state.questions.push({ ...initialQuestionData, id: Date.now() });
    },

    addAnswer: (state, actions) => {
      state.questions
        .find((question) => question.id === actions.payload.id)
        .answers.push({
          id: Date.now(),
          text: "",
        });
    },

    removeQuestion: (state, actions) => {
      state.questions = state.questions.filter(
        (question) => question.id !== actions.payload.id
      );
    },
  },
});

export const { addAnswer, addQuestion, removeQuestion } =
  createQuizSlice.actions;

export default createQuizSlice.reducer;
