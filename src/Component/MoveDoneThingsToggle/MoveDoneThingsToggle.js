import React from 'react';
import './MoveDoneThingsToggle.scss';
import { Switch } from 'antd';

function MoveDoneThingsToggle() {
  return (
    <div className="MoveDoneThingsToggle">
      <div>
        <p>Move done things to end?</p>
      </div>
      <Switch className="MoveDoneThingsToggle_switch" />
    </div>
  );
}

export default MoveDoneThingsToggle;
