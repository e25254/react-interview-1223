import React from 'react';
import './AddToList.scss';
import { FaPlus } from 'react-icons/fa';
function AddToList() {
  return (
    <div className="AddToList">
      <div className="AddToList_text">
        <p>AddToList</p>
      </div>
      <div className="AddToList_input">
        <input type="text" />
        <div className="AddToList_input_icon">
          <FaPlus />
        </div>
      </div>
    </div>
  );
}

export default AddToList;
