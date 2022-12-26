import React from 'react';
import { Progress } from 'antd';
import './ProgressAnt.scss';
function ProgressAnt() {
  return (
    <div className="ProgressAnt">
      <p>50%</p>
      <Progress
        percent={50}
        showInfo={false}
        strokeColor={'#9BAFF6'}
        strokeWidth={15}
      />
    </div>
  );
}

export default ProgressAnt;
