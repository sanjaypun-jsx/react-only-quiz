import React, { createContext, useState } from "react";

export const ScoreContext = createContext();
export const ScoreProvider = (props) => {
  const [total, setTotal] = useState(0);
  return (
    <ScoreContext.Provider value={[total, setTotal]}>
      {props.children}
    </ScoreContext.Provider>
  );
};
