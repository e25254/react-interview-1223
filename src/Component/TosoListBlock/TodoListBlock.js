import React from 'react';
import TodoListItem from '../TodoListItem/TodoListItem';
import './TodoListBlock.scss';
function TodoListBlock() {
  return (
    <div className="TodoListBlock">
      <TodoListItem />
    </div>
  );
}

export default TodoListBlock;
