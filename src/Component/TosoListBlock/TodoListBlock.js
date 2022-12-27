import React, { useEffect, useRef } from 'react';
import TodoListItem from '../TodoListItem/TodoListItem';
import './TodoListBlock.scss';
import { useAllContext } from '../AllContext/AllContext';
function TodoListBlock() {
  const { todoItem, displayTodoItem } = useAllContext();
  const theLastTodo = useRef();
  useEffect(() => {
    theLastTodo.current?.scrollIntoView({ behavior: 'smooth' });
  }, [displayTodoItem]);

  return (
    <div className="TodoListBlock">
      <TodoListItem />
      <div ref={theLastTodo}></div>
    </div>
  );
}

export default TodoListBlock;
