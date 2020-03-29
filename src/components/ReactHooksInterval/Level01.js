import { SmileTwoTone } from '@ant-design/icons';
import { Result } from 'antd';
import React, { useState } from 'react';

const Level01 = () => {
  const [count, setCount] = useState(0);
  
  setInterval(() => {
    setCount(count + 1);
  }, 500);

  return (
    <div>
      <Result
        icon={<SmileTwoTone />}
        title='Level 1: setInterval'
        subTitle={`Count: ${count}`}
      />
    </div>
  );
};

export default Level01;
