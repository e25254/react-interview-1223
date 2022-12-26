import React from 'react';
import './Home.scss';
import ProgressAnt from '../../Component/ProgressAnt/ProgressAnt';
import TodoListBlock from '../../Component/TosoListBlock/TodoListBlock';

function TodoList() {
  return (
    <>
      <div className="BackGround">
        <div className="TodoList_Title">
          <h1>TodoList</h1>
          <p>ADD THING TO DO</p>
        </div>
        <ProgressAnt />
        <TodoListBlock />
      </div>
    </>
  );
}

export default TodoList;
