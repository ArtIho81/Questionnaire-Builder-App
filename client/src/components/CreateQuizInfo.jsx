import React, { useState } from "react";
import { addQuestion, setQuizInfo } from "../store/slices/createQuizSlice";
import { useDispatch, useSelector } from "react-redux";
import { useInput } from "../hooks/useInput.js";
import { LabeledTextArea } from "./LabeledTextArea.jsx";

export const CreateQuizInfo = () => {
  const { name, desc } = useSelector((state) => state.createQuiz);
  const dispatch = useDispatch();

  const handleChange = (e) =>
    dispatch(
      setQuizInfo({ value: e.target.value, input: e.target.dataset.input })
    );

  return (
    <div className="info-container">
      <div className="info-item">
        <label htmlFor="name">Quiz name</label>
        <input
          data-input="name"
          type="text"
          id="name"
          value={name}
          onChange={handleChange}
        />
      </div>
      <LabeledTextArea
        dataInput="desc"
        label="Quiz desription"
        className="info-item"
        id="desc"
        value={desc}
        onChange={handleChange}
      />
    </div>
  );
};
