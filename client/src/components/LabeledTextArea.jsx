import React from "react";

export const LabeledTextArea = ({
  dataInput,
  className,
  id,
  value,
  onChange,
  label,
}) => {
  return (
    <div className={className}>
      <label htmlFor={id}>{label}</label>
      <textarea
        data-input={dataInput}
        id={id}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
