import React, { useState, useContext, createContext } from 'react';
const AllContext = createContext(null);
export const AllContextProvider = ({ children }) => {
  const [todoItem, setTodoItem] = useState([]);
  return (
    <AllContext.Provider
      value={{
        todoItem,
        setTodoItem,
      }}
    >
      {children}
    </AllContext.Provider>
  );
};

export const useAllContext = () => useContext(AllContext);
