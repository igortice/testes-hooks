import { SmileTwoTone } from '@ant-design/icons';
import { Radio, Result } from 'antd';
import React, { useState } from 'react';

const Level00 = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Result
        icon={<SmileTwoTone />}
        title='Level 0: Hello World'
        subTitle={`Count: ${count}`}
        extra={
          <Radio.Group value='large' onChange={event => setCount(count => count + event.target.value)}>
            <Radio.Button value={+1}>+1</Radio.Button>
            <Radio.Button value={-1}>-1</Radio.Button>
          </Radio.Group>
        }
      />
    </div>
  );
};

export default Level00;
