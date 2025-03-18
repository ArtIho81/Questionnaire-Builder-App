import React, { useState } from "react";
import { createNewQuiz } from "../store/slices/createQuizSlice";
import { useDispatch } from "react-redux";
import { useInput } from "../hooks/useInput.js";

export const CreateQuizInfo = () => {
  const name = useInput("");
  const desc = useInput("");
  const [click, setClick] = useState(false);
  const dispatch = useDispatch();

  return (
    <div>
      <label>
        Quiz name
        <input type="text" {...name} />
      </label>
      <label>
        Quiz desription
        <textarea name="" id="" {...desc}></textarea>
      </label>

      <button
        onClick={() => {
          dispatch(createNewQuiz({ name: name.value, desc: desc.value }));
          setClick(true);
        }}
      >
        {click && name.value ? "Edit quiz info" : "Create new quiz"}
      </button>
    </div>
  );
};
