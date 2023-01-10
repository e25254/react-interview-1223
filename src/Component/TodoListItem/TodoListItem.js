import React, { useEffect } from 'react';
import './TodoListItem.scss';
import { Checkbox } from 'antd';
import { MdOutlineClose } from 'react-icons/md';
import { useAllContext } from '../AllContext/AllContext';
import { useSelector, useDispatch } from 'react-redux';
import { delTodo } from '../Action/Action';

function TodoListItem() {
  const todoListFromReducer = useSelector((state) => state.TodoList);
  const dispatch = useDispatch();
  // console.log('123', todoListFromReducer);
  const {
    todoItem,
    setTodoItem,
    moveDoneThingsToggle,
    displayTodoItem,
    setDisplayTodoItem,
  } = useAllContext();

  useEffect(() => {
    if (todoListFromReducer) {
      let tmp = todoListFromReducer.map((v) => {
        return { ...v };
      });

      // TODO 變更是否完成重新排後 要放進redux裏

      // if (moveDoneThingsToggle) {
      //   tmp = tmp.sort((a, b) => {
      //     return a.done - b.done;
      //   });
      // } else {
      //   tmp = tmp.sort((a, b) => {
      //     return Date.parse(a.create_time) - Date.parse(b.create_time);
      //   });
      // }

      // 寫進localStorage && 寫近displayTodoItem 不影響redux

      window.localStorage.setItem(
        'myTodoList',
        JSON.stringify(todoListFromReducer)
      );
      setDisplayTodoItem(tmp);
    }
  }, [moveDoneThingsToggle, todoListFromReducer]);

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
                    // TODO 是否完成 要放進redux
                    // let newTodoList = todoItem.filter((h) => {
                    //   return v.todo === h.todo && v.uuid === h.uuid;
                    // });
                    // // console.log(newTodoList[0].done);
                    // newTodoList[0].done = !newTodoList[0].done;
                    // setTodoItem([...todoItem], newTodoList[0]);
                  }}
                ></Checkbox>
                <div className="TodoListItem_text">
                  <p
                    style={v.done ? { textDecoration: 'line-through' } : {}}
                    onClick={() => {
                      // TODO 是否完成 要放進redux 跟上面的是否完成一樣 要重構
                      // let newTodoList = todoItem.filter((h) => {
                      //   return v.todo === h.todo && v.uuid === h.uuid;
                      // });
                      // // console.log(newTodoList[0].done);
                      // newTodoList[0].done = !newTodoList[0].done;
                      // setTodoItem([...todoItem], newTodoList[0]);
                    }}
                  >
                    {v.todo}
                  </p>
                </div>
                <div
                  className="TodoListItem_icon"
                  onClick={() => {
                    //TODO  刪除項目 要放進redux
                    // let newTodoList = todoItem;
                    // newTodoList = newTodoList.filter((h) => {
                    //   return v.uuid !== h.uuid;
                    // });
                    // setTodoItem(newTodoList);
                    dispatch(delTodo(v.uuid));
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
