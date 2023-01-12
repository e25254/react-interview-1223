import React, { useState, useContext, createContext } from 'react';
const AllContext = createContext(null);
export const AllContextProvider = ({ children }) => {
  // const [todoItem, setTodoItem] = useState([
  // {
  //   todo: 'Learn React.js',
  //   create_time: '2022/12/23 18:59:23',
  //   done: true,
  // },
  // {
  //   todo: 'Learn Angular.js',
  //   create_time: '2022/12/25 18:59:23',
  //   done: false,
  // },
  // {
  //   todo: 'Learn photoShop',
  //   create_time: '2022/12/20 18:59:23',
  //   done: false,
  // },
  // {
  //   todo: 'Learn node.js',
  //   create_time: '2022/11/23 18:59:23',
  //   done: true,
  // },
  // ]);
  // const [todoItem, setTodoItem] = useState(
  //   window.localStorage.getItem('myTodoList')
  //     ? JSON.parse(window.localStorage.getItem('myTodoList'))
  //     : []
  // );
  const [moveDoneThingsToggle, setMoveDoneThingsToggle] = useState(false);
  const [displayTodoItem, setDisplayTodoItem] = useState([]);
  return (
    <AllContext.Provider
      value={{
        moveDoneThingsToggle,
        setMoveDoneThingsToggle,
        displayTodoItem,
        setDisplayTodoItem,
      }}
    >
      {children}
    </AllContext.Provider>
  );
};

export const useAllContext = () => useContext(AllContext);
