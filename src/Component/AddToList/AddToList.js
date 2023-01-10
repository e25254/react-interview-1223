import React, { useState } from 'react';
import './AddToList.scss';
import { FaPlus } from 'react-icons/fa';
import { useAllContext } from '../AllContext/AllContext';
import dayjs, { Dayjs } from 'dayjs';

import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from '../Action/Action';
function AddToList() {
  const { todoItem, setTodoItem, inputWord, setInputWord } = useAllContext();
  // 處理要避開輸入法拼字用Enter的指標
  const [isComposition, setIsComposition] = useState(false);
  const todoListFromReducer = useSelector((state) => {
    return state.TodoList;
  });
  const dispatch = useDispatch();
  // console.log(dayjs(now).format('YYYY/MM/DD hh:mm:ss '));
  // console.log(Date.parse(todoItem[1].create_time));
  // console.log(Date.parse(todoItem[2].create_time));
  // const dispatch = useDispatch();
  const inputHandler = () => {
    if (!inputWord) {
      return;
    }
    dispatch(addTodo(inputWord));
    // setTodoItem([
    //   ...todoItem,
    //   {
    //     todo: inputWord,
    //     create_time: dayjs(new Date()).format('YYYY/MM/DD HH:mm:ss'),
    //     done: false,
    //     uuid: uuidv4(),
    //   },
    // ]);
    setInputWord('');
  };
  return (
    <div className="AddToList">
      <div className="AddToList_text">
        <p>AddToList</p>
      </div>
      <div className="AddToList_input">
        <input
          type="text"
          value={inputWord}
          onChange={(e) => {
            setInputWord(e.target.value);
          }}
          // 中文輸入法用
          onCompositionStart={() => {
            setIsComposition(true);
          }}
          onCompositionEnd={() => {
            setIsComposition(false);
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && isComposition === false) {
              inputHandler();
            }
          }}
        />
        <div className="AddToList_input_icon" onClick={inputHandler}>
          <FaPlus />
        </div>
      </div>
    </div>
  );
}

export default AddToList;
