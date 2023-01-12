import React, { useEffect, useState } from 'react';
import { Progress } from 'antd';
import './ProgressAnt.scss';
import { useSelector } from 'react-redux';
function ProgressAnt() {
  const [percentage, setPercentage] = useState(0);
  const todoListFromReducer = useSelector((state) => state.TodoList);

  useEffect(() => {
    if (todoListFromReducer.length > 0) {
      let finish = todoListFromReducer.filter((v) => {
        return v.done;
      });
      setPercentage(
        Math.round((finish.length / todoListFromReducer.length) * 100)
      );
    }
  }, [todoListFromReducer, setPercentage]);

  return (
    <div className="ProgressAnt">
      <p>{percentage}%</p>
      <Progress
        percent={percentage}
        showInfo={false}
        strokeColor={'#9BAFF6'}
        strokeWidth={15}
      />
    </div>
  );
}

export default ProgressAnt;
