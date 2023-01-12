import React, { useEffect } from 'react';
import './TodoListItem.scss';
import { Checkbox } from 'antd';
import { MdOutlineClose } from 'react-icons/md';
import { useAllContext } from '../AllContext/AllContext';
import { useSelector, useDispatch } from 'react-redux';
import { delTodo, doneTodo } from '../Action/Action';

function TodoListItem() {
  const todoListFromReducer = useSelector((state) => state.TodoList);
  const dispatch = useDispatch();
  // console.log('123', todoListFromReducer);
  const { moveDoneThingsToggle, displayTodoItem, setDisplayTodoItem } =
    useAllContext();

  useEffect(() => {
    if (todoListFromReducer) {
      let tmp = todoListFromReducer.map((v) => {
        return { ...v };
      });

      if (moveDoneThingsToggle) {
        tmp = tmp.sort((a, b) => {
          return a.done - b.done;
        });
      } else {
        tmp = tmp.sort((a, b) => {
          return Date.parse(a.create_time) - Date.parse(b.create_time);
        });
      }

      // 寫進localStorage && 寫近displayTodoItem 不影響redux
      window.localStorage.setItem(
        'myTodoList',
        JSON.stringify(todoListFromReducer)
      );

      // console.log(JSON.parse(window.localStorage.getItem('myTodoList')));
      setDisplayTodoItem(tmp);
    }
  }, [moveDoneThingsToggle, todoListFromReducer, setDisplayTodoItem]);

  return (
    <>
      {displayTodoItem
        ? displayTodoItem.map((v, i) => {
            return (
              <div className="TodoListItem" key={i}>
                <Checkbox
                  className="TodoListItem_CheckBox"
                  checked={v.done}
                  onClick={() => {
                    dispatch(doneTodo(v));
                  }}
                ></Checkbox>
                <div className="TodoListItem_text">
                  <p
                    style={v.done ? { textDecoration: 'line-through' } : {}}
                    onClick={() => {
                      dispatch(doneTodo(v));
                    }}
                  >
                    {v.todo}
                  </p>
                </div>
                <div
                  className="TodoListItem_icon"
                  onClick={() => {
                    dispatch(delTodo(v));
                  }}
                >
                  <MdOutlineClose />
                </div>
              </div>
            );
          })
        : ''}
    </>
  );
}

export default TodoListItem;
