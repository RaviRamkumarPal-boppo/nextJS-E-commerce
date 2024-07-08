'use client'

import { useState } from 'react';

const Tabs = ({tabData}) => {
  const [activeTab, setActiveTab] = useState('Bed Room');

  return (
    <div className='mt-8 mb-5 overflow-x-auto whitespace-nowrap	'>
      <ul className='text-[#2c4c51] flex py-3'>
        {tabData?.map((tab) => (
          <li
            key={tab}
            className={`cursor-pointer px-4 py-2 ${
              activeTab === tab ? 'border-b-2 border-[#2c4c51]' : ''
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tabs;
