import { SmileTwoTone } from '@ant-design/icons';
import { Result } from 'antd';
import React, { useEffect, useState } from 'react';

const Level06 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCount(count + 1);
    }, 500);
    return () => clearTimeout(timeout);
  }, [count]);

  return (
    <div>
      <Result icon={<SmileTwoTone />} title='Level 6: setTimeout' subTitle={`Count: ${count}`} />
    </div>
  );
};

export default Level06;
