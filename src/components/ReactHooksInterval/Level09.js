import { SmileTwoTone } from '@ant-design/icons';
import { Radio, Result } from 'antd';
import React, { useRef, useState } from 'react';

const Level09 = () => {
  const [count, setCount] = useState(0);

  const intervalRef = useRef(null);

  const start = () => {
    intervalRef.current = setInterval(() => {
      setCount(c => c + 1);
    }, 500);
  };

  const stop = () => {
    clearInterval(intervalRef.current);
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
        title='Level 9: useRef'
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

export default Level09;
