import React, { createContext, useState } from "react";

export const QuizContext = createContext();
export const QuizProvider = (props) => {
  const [qs, setQs] = useState([]);
  return (
    <QuizContext.Provider value={[qs, setQs]}>
      {props.children}
    </QuizContext.Provider>
  );
};
