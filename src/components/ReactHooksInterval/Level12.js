import { SmileTwoTone } from '@ant-design/icons';
import { Radio, Result } from 'antd';
import React, { useCallback, useRef, useState } from 'react';

const useCounter = (initialValue, ms) => {
  const [count, setCount] = useState(initialValue);
  const intervalRef = useRef(null);
  const start = useCallback(() => {
    if (intervalRef.current !== null) {
      return;
    }
    intervalRef.current = setInterval(() => {
      setCount(c => c + 1);
    }, ms);
  }, []);
  const stop = useCallback(() => {
    if (intervalRef.current === null) {
      return;
    }
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }, []);
  const reset = useCallback(() => {
    setCount(0);
  }, []);
  return { count, start, stop, reset };
};

const Level12 = () => {
  const { count, start, stop, reset } = useCounter(0, 500);

  const handleRadio = value => {
    switch (value) {
      case 'start':
        start();
        break;
      case 'stop':
        stop();
        break;
      case 'reset':
        reset();
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <Result
        icon={<SmileTwoTone />}
        title='Level 12: custom hook'
        subTitle={`Count: ${count}`}
        extra={
          <Radio.Group value='large' onChange={event => handleRadio(event.target.value)}>
            <Radio.Button value='start'>start</Radio.Button>
            <Radio.Button value='stop'>stop</Radio.Button>
            <Radio.Button value='reset'>reset</Radio.Button>
          </Radio.Group>
        }
      />
    </div>
  );
};

export default Level12;
