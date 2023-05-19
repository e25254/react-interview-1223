import React from 'react';
import './MoveDoneThingsToggle.scss';
import { Switch } from 'antd';
import { useAllContext } from '../AllContext/AllContext';

function MoveDoneThingsToggle() {
  const { moveDoneThingsToggle, setMoveDoneThingsToggle } = useAllContext();
  const test = [123];
  if (test.length < 0) {
    console.log('比較小');
  }
  if (test.length < 0) {
    console.log('比較小2');
  }
  return (
    <div className="MoveDoneThingsToggle">
      <div>
        <p>Move done things to end?</p>
      </div>
      <Switch
        className="MoveDoneThingsToggle_switch"
        checked={moveDoneThingsToggle}
        onChange={() => {
          setMoveDoneThingsToggle(!moveDoneThingsToggle);
        }}
      />
    </div>
  );
}

export default MoveDoneThingsToggle;
