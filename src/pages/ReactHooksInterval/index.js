import { Divider, Select } from 'antd';
import React, { useState } from 'react';
import Level00 from '../../components/ReactHooksInterval/Level00';
import Level01 from '../../components/ReactHooksInterval/Level01';
import Level02 from '../../components/ReactHooksInterval/Level02';
import Level03 from '../../components/ReactHooksInterval/Level03';
import Level04 from '../../components/ReactHooksInterval/Level04';
import Level05 from '../../components/ReactHooksInterval/Level05';
import Level06 from '../../components/ReactHooksInterval/Level06';
import Level07 from '../../components/ReactHooksInterval/Level07';
import Level08 from '../../components/ReactHooksInterval/Level08';
import Level09 from '../../components/ReactHooksInterval/Level09';
import Level10 from '../../components/ReactHooksInterval/Level10';
import Level11 from '../../components/ReactHooksInterval/Level11';
import Level12 from '../../components/ReactHooksInterval/Level12';

export default () => {
  const [levels] = useState([
    <Level00 />,
    <Level01 />,
    <Level02 />,
    <Level03 />,
    <Level04 />,
    <Level05 />,
    <Level06 />,
    <Level07 />,
    <Level08 />,
    <Level09 />,
    <Level10 />,
    <Level11 />,
    <Level12 />
  ]);
  const [optionSelected, setOptionSelected] = useState(null);
  const { Option } = Select;

  const Component = () => {
    if (optionSelected) {
      return levels[optionSelected];
    } else {
      return <></>;
    }
  };

  return (
    <div
      className='site-layout-background'
      style={{
        margin: '24px 16px',
        padding: 24,
        minHeight: '94.5%'
      }}>
      <Select
        size='large'
        style={{ width: 220 }}
        placeholder='Select Level'
        allowClear
        onChange={value => setOptionSelected(value)}>
        {Object.keys(levels).map(idx => (
          <Option key={idx} value={idx}>
            {idx}
          </Option>
        ))}
      </Select>
      <Divider dashed />
      <Component />
    </div>
  );
};
