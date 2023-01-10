import './Home.scss';
import ProgressAnt from '../../Component/ProgressAnt/ProgressAnt';
import TodoListBlock from '../../Component/TosoListBlock/TodoListBlock';
import MoveDoneThingsToggle from '../../Component/MoveDoneThingsToggle/MoveDoneThingsToggle';
import AddToList from '../../Component/AddToList/AddToList';
import { useSelector } from 'react-redux';

function TodoList() {
  return (
    <>
      <div className="BackGround">
        <div className="TodoList_Title">
          <h1>Todo List</h1>
          <p>Add Thing To Do</p>
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
