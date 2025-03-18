import React from "react";

export const AnswerInput = (props) => {

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
