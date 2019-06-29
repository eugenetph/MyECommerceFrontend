import React from 'react';
import { Select } from 'antd'

import 'antd/dist/antd.css';

const { Option } = Select;

function App() {

  const children = [];
  for (let i = 10; i < 36; i++) {
    children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
  }

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  return (
    <div className="App">
      <h1>Our new Project</h1>
      <div>
        <Select
          mode="multiple"
          style={{ width: '300px' }}
          placeholder="Please select"
          defaultValue={['a10', 'c12']}
          onChange={handleChange}
        >
          {children}
        </Select>
        <Select
          mode="multiple"
          style={{ width: '300px' }}
          placeholder="Please select"
          defaultValue={['a10', 'c12']}
          onChange={handleChange}
        >
          {children}
        </Select>
      </div>
    </div>
  );
}

export default App;
