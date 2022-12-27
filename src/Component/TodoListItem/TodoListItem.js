import React, { useEffect } from 'react';
import './TodoListItem.scss';
import { Checkbox } from 'antd';
import { MdOutlineClose } from 'react-icons/md';
import { useAllContext } from '../AllContext/AllContext';

function TodoListItem() {
  const { todoItem, setTodoItem, moveDoneThingsToggle } = useAllContext();
  useEffect(() => {
    let tmp = todoItem.map((v) => {
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
    setTodoItem(tmp);
  }, [moveDoneThingsToggle]);
  return (
    <>
      {todoItem
        ? todoItem.map((v, i) => {
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
          })
        : ''}
    </>
  );
}

export default TodoListItem;
