import './Home.scss';
import ProgressAnt from '../../Component/ProgressAnt/ProgressAnt';
import TodoListBlock from '../../Component/TosoListBlock/TodoListBlock';
import MoveDoneThingsToggle from '../../Component/MoveDoneThingsToggle/MoveDoneThingsToggle';
import AddToList from '../../Component/AddToList/AddToList';

function TodoList() {
  const maxHeight = window.innerHeight;
  return (
    <>
      <div className="BackGround" style={{ height: `${maxHeight}px` }}>
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
