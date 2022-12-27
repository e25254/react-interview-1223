import React, { useEffect } from 'react';
import './Home.scss';
import ProgressAnt from '../../Component/ProgressAnt/ProgressAnt';
import TodoListBlock from '../../Component/TosoListBlock/TodoListBlock';
import MoveDoneThingsToggle from '../../Component/MoveDoneThingsToggle/MoveDoneThingsToggle';
import AddToList from '../../Component/AddToList/AddToList';
import { useAllContext } from '../../Component/AllContext/AllContext';

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
        <MoveDoneThingsToggle />
        <AddToList />
      </div>
    </>
  );
}

export default TodoList;
