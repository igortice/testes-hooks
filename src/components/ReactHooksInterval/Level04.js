import { SmileTwoTone } from '@ant-design/icons';
import { Result } from 'antd';
import React, { useEffect, useState } from 'react';

const Level04 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1);
    }, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Result icon={<SmileTwoTone />} title='Level 4: cleanup' subTitle={`Count: ${count}`} />
    </div>
  );
};

export default Level04;
