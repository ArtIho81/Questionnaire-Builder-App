import { configureStore } from "@reduxjs/toolkit";
import createQuizReducer from './slices/createQuizSlice.js'

export const store = configureStore({
  reducer: {
    createQuiz: createQuizReducer
  },
});
