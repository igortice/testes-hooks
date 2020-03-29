import { SmileTwoTone } from '@ant-design/icons';
import { Result } from 'antd';
import React, { useEffect, useState } from 'react';

const Level05 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1);
    }, 500);
    return () => clearInterval(interval);
  }, [count]);

  return (
    <div>
      <Result icon={<SmileTwoTone />} title='Level 5: use count as dependency' subTitle={`Count: ${count}`} />
    </div>
  );
};

export default Level05;
