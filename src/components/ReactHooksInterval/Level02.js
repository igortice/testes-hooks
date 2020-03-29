import { SmileTwoTone } from '@ant-design/icons';
import { Result } from 'antd';
import React, { useEffect, useState } from 'react';

const Level02 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount(count + 1);
    }, 500);
  });

  return (
    <div>
      <Result icon={<SmileTwoTone />} title='Level 2: useEffect' subTitle={`Count: ${count}`} />
    </div>
  );
};

export default Level02;
