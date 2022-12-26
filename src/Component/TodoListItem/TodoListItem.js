import React from 'react';
import './TodoListItem.scss';
import { Checkbox } from 'antd';
import { MdOutlineClose } from 'react-icons/md';
import { useAllContext } from '../AllContext/AllContext';

function TodoListItem() {
  const { todoItem, setTodoItem } = useAllContext();
  return (
    <>
      {todoItem.map((v, i) => {
        return (
          <div className="TodoListItem" key={i}>
            <Checkbox
              className="TodoListItem_CheckBox"
              checked={v.done}
              onChange={() => {
                let newTodoList = todoItem[i];
                newTodoList.done = !todoItem[i].done;
                setTodoItem([...todoItem], newTodoList);
              }}
            ></Checkbox>
            <div className="TodoListItem_text">
              <p
                style={v.done ? { textDecoration: 'line-through' } : {}}
                onClick={() => {
                  let newTodoList = todoItem[i];
                  newTodoList.done = !todoItem[i].done;
                  setTodoItem([...todoItem], newTodoList);
                }}
              >
                {v.todo}
              </p>
            </div>
            <div
              className="TodoListItem_icon"
              onClick={() => {
                let newTodoList = todoItem;
                newTodoList = newTodoList.filter((h) => {
                  return h !== v;
                });
                setTodoItem(newTodoList);
              }}
            >
              <MdOutlineClose />
            </div>
          </div>
        );
      })}
    </>
  );
}

export default TodoListItem;
