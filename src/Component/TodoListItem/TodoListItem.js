import React from 'react';
import './TodoListItem.scss';
import { Checkbox } from 'antd';
import { MdOutlineClose } from 'react-icons/md';
import { AllContextProvider, useAllContext } from '../AllContext/AllContext';

function TodoListItem() {
  const { todoItem, setTodoItem } = useAllContext();
  return (
    <>
      {todoItem.map((v, i) => {
        return (
          <div className="TodoListItem" key={i}>
            <Checkbox className="TodoListItem_CheckBox"></Checkbox>
            <div className="TodoListItem_text">
              <p>{v}</p>
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
