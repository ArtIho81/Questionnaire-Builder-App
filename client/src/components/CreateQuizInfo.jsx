import React, { useState } from "react";
import { createNewQuiz } from "../store/slices/createQuizSlice";
import { useDispatch } from "react-redux";
import { useInput } from "../hooks/useInput.js";

export const CreateQuizInfo = () => {
  const name = useInput("");
  const desc = useInput("");
  const [click, setClick] = useState(false);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(createNewQuiz({ name: name.value, desc: desc.value }));
    name.value && setClick(true);
  };

  return (
    <div className="info-container">
      <div className="info-item">
        <label htmlFor="name">Quiz name</label>
        <input type="text" id="name" {...name} />
      </div>
      <div className="info-item">
        <label htmlFor="desc">Quiz desription</label>
        <textarea id="desc" {...desc}></textarea>
      </div>
      <button onClick={handleClick}>
        {click ? "Edit quiz info" : "Create new quiz"}
      </button>
    </div>
  );
};
