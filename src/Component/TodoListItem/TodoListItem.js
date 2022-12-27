import React, { useEffect } from 'react';
import './TodoListItem.scss';
import { Checkbox } from 'antd';
import { MdOutlineClose } from 'react-icons/md';
import { useAllContext } from '../AllContext/AllContext';

function TodoListItem() {
  const {
    todoItem,
    setTodoItem,
    moveDoneThingsToggle,
    displayTodoItem,
    setDisplayTodoItem,
  } = useAllContext();

  useEffect(() => {
    if (todoItem) {
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
      window.localStorage.setItem('myTodoList', JSON.stringify(todoItem));
      setDisplayTodoItem(tmp);
    }
  }, [moveDoneThingsToggle, todoItem]);

  return (
    <>
      {displayTodoItem
        ? displayTodoItem.map((v, i) => {
            return (
              <div className="TodoListItem" key={i}>
                <Checkbox
                  className="TodoListItem_CheckBox"
                  checked={v.done}
                  onChange={() => {
                    let newTodoList = todoItem.filter((h) => {
                      return v.todo === h.todo && v.uuid === h.uuid;
                    });
                    // console.log(newTodoList[0].done);
                    newTodoList[0].done = !newTodoList[0].done;
                    setTodoItem([...todoItem], newTodoList[0]);
                  }}
                ></Checkbox>
                <div className="TodoListItem_text">
                  <p
                    style={v.done ? { textDecoration: 'line-through' } : {}}
                    onClick={() => {
                      let newTodoList = todoItem.filter((h) => {
                        return v.todo === h.todo && v.uuid === h.uuid;
                      });
                      // console.log(newTodoList[0].done);
                      newTodoList[0].done = !newTodoList[0].done;
                      setTodoItem([...todoItem], newTodoList[0]);
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
                      return v.uuid !== h.uuid;
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
