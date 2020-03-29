import { SmileTwoTone } from '@ant-design/icons';
import { Result } from 'antd';
import React, { useEffect, useState } from 'react';

const Level07 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(c => c + 1);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Result icon={<SmileTwoTone />} title='Level 7: functional updates for useState' subTitle={`Count: ${count}`} />
    </div>
  );
};

export default Level07;
