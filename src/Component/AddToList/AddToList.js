import React, { useState } from 'react';
import './AddToList.scss';
import { FaPlus } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addTodo } from '../Action/Action';
function AddToList() {
  const dispatch = useDispatch();
  // 輸入的文字
  const [inputWord, setInputWord] = useState('');
  // 處理要避開輸入法拼字用Enter的指標
  const [isComposition, setIsComposition] = useState(false);

  //  提交給  redux
  const AddTodoDispatch = () => {
    if (!inputWord) {
      return;
    }
    dispatch(addTodo(inputWord));
    setInputWord('');
  };

  //  輸入編輯
  const inputHandler = (value) => {
    setInputWord(value.target.value);
  };

  //  按下 enter 送出
  const pressEnter = (key) => {
    if (key.key === 'Enter' && isComposition === false) {
      AddTodoDispatch();
    }
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
          onChange={inputHandler}
          // 中文輸入法用
          onCompositionStart={() => {
            setIsComposition(true);
          }}
          onCompositionEnd={() => {
            setIsComposition(false);
          }}
          onKeyDown={pressEnter}
        />
        <div className="AddToList_input_icon" onClick={AddTodoDispatch}>
          <FaPlus />
        </div>
      </div>
    </div>
  );
}

export default AddToList;
