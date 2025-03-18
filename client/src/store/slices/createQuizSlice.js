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
  questions: [initialQuestionData],
};

const findInstanceById = (instances, id) => {
  return instances.find((instance) => instance.id === id);
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
      findInstanceById(state.questions, actions.payload.id).text =
        actions.payload.questionText;
    },

    setQuestionType: (state, actions) => {
      findInstanceById(state.questions, actions.payload.id).type =
        actions.payload.type;
    },

    addAnswer: (state, actions) => {
      findInstanceById(state.questions, actions.payload.id).answers.push({
        id: Date.now(),
        text: "",
      });
    },

    setAnswerText: (state, actions) => {},

    removeQuestion: (state, actions) => {
      state.questions = state.questions.filter(
        (question) => question.id !== actions.payload.id
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
} = createQuizSlice.actions;

export default createQuizSlice.reducer;
