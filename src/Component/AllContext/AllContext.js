import React, { useState, useContext, createContext } from 'react';
const AllContext = createContext(null);
export const AllContextProvider = ({ children }) => {
  const [todoItem, setTodoItem] = useState([]);
  return (
    <AllContextProvider.Provider
      value={{
        todoItem,
        setTodoItem,
      }}
    >
      {children}
    </AllContextProvider.Provider>
  );
};

export const useHotelContext = () => useContext(AllContext);
