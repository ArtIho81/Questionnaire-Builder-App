import React from "react";

export const AnswerInput = () => {
  return (
    <div className="answer-input-block">
      <label>
        Answer
        <input type="text" />
      </label>
      <button>Remove</button>
    </div>
  );
};
