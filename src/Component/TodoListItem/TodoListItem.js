import React, { useEffect, useState } from 'react';
import './TodoListItem.scss';
import { Checkbox } from 'antd';
import { MdOutlineClose } from 'react-icons/md';
import { FiEdit } from 'react-icons/fi';
import { useAllContext } from '../AllContext/AllContext';
import { useSelector, useDispatch } from 'react-redux';
import { delTodo, doneTodo, editing, editValue } from '../Action/Action';

function TodoListItem() {
  const todoListFromReducer = useSelector((state) => state.TodoList);
  const dispatch = useDispatch();
  // console.log('123', todoListFromReducer);
  const { moveDoneThingsToggle, displayTodoItem, setDisplayTodoItem } =
    useAllContext();

  const [editingInputValue, setEditingInputValue] = useState('');

  const [isComposition, setIsComposition] = useState(false);

  //  輸入編輯
  const editingInputHandler = (value) => {
    setEditingInputValue(value.target.value);
  };

  // //  提交給  redux
  // const EditValueDispatch = () => {
  //   if (!editingInputValue) {
  //     return;
  //   }

  //   //TODO: 要加入編輯文字的dispatch
  //   // dispatch(addTodo(inputWord));
  //   setEditingInputValue('');
  // };

  //  按下 enter 送出
  // const pressEnter = (key) => {
  //   if (key.key === 'Enter' && isComposition === false) {
  //     EditValueDispatch();
  //   }
  // };

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
                      if (!v.editing) {
                        dispatch(doneTodo(v));
                      }
                    }}
                  >
                    {v.editing ? (
                      <input
                        className="TodoListItem_editInput"
                        placeholder={v.todo}
                        value={editingInputValue}
                        onChange={editingInputHandler}
                        onCompositionStart={() => {
                          setIsComposition(true);
                        }}
                        onCompositionEnd={() => {
                          setIsComposition(false);
                        }}
                        onKeyDown={(key) => {
                          if (key.key === 'Enter' && isComposition === false) {
                            if (editingInputValue !== '') {
                              dispatch(editValue(v, editingInputValue));
                            } else {
                              dispatch(editValue(v, v.todo));
                            }
                          }
                        }}
                      />
                    ) : (
                      v.todo
                    )}
                  </p>
                </div>
                <div
                  className="TodoListItem_icon"
                  onClick={() => {
                    setEditingInputValue('');
                    if (!v.editing) {
                      dispatch(editing(v));
                    } else {
                      if (editingInputValue !== '') {
                        dispatch(editValue(v, editingInputValue));
                      } else {
                        dispatch(editValue(v, v.todo));
                      }
                    }
                  }}
                >
                  <FiEdit />
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
