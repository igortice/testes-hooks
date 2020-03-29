import { SmileTwoTone } from '@ant-design/icons';
import { Radio, Result } from 'antd';
import React, { useState } from 'react';

const Level08 = () => {
  const [count, setCount] = useState(0);

  let interval = null;

  const start = () => {
    interval = setInterval(() => {
      setCount(c => c + 1);
    }, 500);
  };

  const stop = () => {
    clearInterval(interval);
  };

  const handleRadio = value => {
    switch (value) {
      case 'start':
        start();
        break;
      case 'stop':
        stop();
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <Result
        icon={<SmileTwoTone />}
        title='Level 8: local variable'
        subTitle={`Count: ${count}`}
        extra={
          <Radio.Group value='large' onChange={event => handleRadio(event.target.value)}>
            <Radio.Button value='start'>start</Radio.Button>
            <Radio.Button value='stop'>stop</Radio.Button>
          </Radio.Group>
        }
      />
    </div>
  );
};

export default Level08;
