import React from 'react';
import './TodoListItem.scss';
import { Checkbox } from 'antd';
import { MdOutlineClose } from 'react-icons/md';

function TodoListItem() {
  return (
    <div className="TodoListItem">
      <Checkbox className="TodoListItem_CheckBox"></Checkbox>
      <div className="TodoListItem_text">
        <p>Learn React.js</p>
      </div>
      <div className="TodoListItem_icon">
        <MdOutlineClose />
      </div>
    </div>
  );
}

export default TodoListItem;
