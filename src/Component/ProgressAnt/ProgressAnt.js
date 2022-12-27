import React, { useEffect } from 'react';
import { Progress } from 'antd';
import './ProgressAnt.scss';
import { useAllContext } from '../AllContext/AllContext';
function ProgressAnt() {
  const { percentage, setPercentage, todoItem } = useAllContext();
  useEffect(() => {
    if (todoItem.length > 1) {
      let finish = todoItem.filter((v) => {
        return v.done;
      });
      // let notFinish = todoItem.filter((v) => {
      //   return !v.done;
      // });
      setPercentage(Math.round((finish.length / todoItem.length) * 100));
    }
  }, [todoItem]);
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
