import React, { useState } from 'react';

const Tabs = () => {
  const [selectedTab, setSelectedTab] = useState('tab1');

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div>
      <div>
        <button onClick={() => handleTabClick('tab1')}>Tab 1</button>
        <button onClick={() => handleTabClick('tab2')}>Tab 2</button>
        <button onClick={() => handleTabClick('tab3')}>Tab 3</button>
      </div>
      {selectedTab === 'tab1' && <div className="element">Tab 1 Content</div>}
      {selectedTab === 'tab2' && <div>Tab 2 Content</div>}
      {selectedTab === 'tab3' && <div>Tab 3 Content</div>}
    </div>
  );
};

export default Tabs;