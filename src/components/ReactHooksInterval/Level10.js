import { SmileTwoTone } from '@ant-design/icons';
import { Radio, Result } from 'antd';
import React, { useRef, useState } from 'react';

const Level10 = () => {
  const [count, setCount] = useState(0);

  const intervalRef = useRef(null);
  const start = () => {
    if (intervalRef.current !== null) {
      return;
    }
    intervalRef.current = setInterval(() => {
      setCount(c => c + 1);
    }, 500);
  };
  const stop = () => {
    if (intervalRef.current === null) {
      return;
    }
    clearInterval(intervalRef.current);
    intervalRef.current = null;
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
        title='Level 10: useCallback'
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

export default Level10;
