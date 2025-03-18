import React from "react";
import { QuizCard } from "../components/QuizCard";

const catalog = [];
for (let i = 0; i < 10; i++) {
  catalog.push(i);
}

export const QuizCatalogPage = () => {
  return (
    <div>
      <h1>Quiz Catalog</h1>
      {catalog.map((card) => <QuizCard/>)}
    </div>
  );
};
