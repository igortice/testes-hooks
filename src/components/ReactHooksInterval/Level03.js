import { SmileTwoTone } from '@ant-design/icons';
import { Result } from 'antd';
import React, { useEffect, useState } from 'react';

const Level03 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount(count + 1);
    }, 300);
  }, []);

  return (
    <div>
      <Result icon={<SmileTwoTone />} title='Level 3: run only once' subTitle={`Count: ${count}`} />
    </div>
  );
};

export default Level03;
