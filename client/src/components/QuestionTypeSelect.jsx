import React from "react";

export const QuestionTypeSelect = ({ id, value, dataInput, onChange }) => {

  return (
    <div>
      <label htmlFor={id}>Type</label>
      <select
        data-input={dataInput}
        id={id}
        value={value}
        onChange={onChange}
      >
        <option value="text">Text</option>
        <option value="single-choice">Single choice</option>
        <option value="multiple-choices">Multiple choice</option>
      </select>
    </div>
  );
};
