import React from "react";

export const QuizCard = (props) => {
  return (
    <div className="quiz-card">
      <div>
        <h2>{props?.name || "Quiz name"}</h2>
        
      </div>
      <p>{props?.desc || "Quiz description"}</p>
      <p>Questions: {props?.questionAmount || 17}</p>
      <p>{props?.completionAmount || 0}</p>
    </div>
  );
};
