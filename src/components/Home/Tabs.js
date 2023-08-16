import React, { useState } from "react";

const Tabs = () => {
  const [selectedTab, setSelectedTab] = useState("tab1");

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div>
      <div>
        <button 
        className={`${selectedTab === "tab1" ? "active-link" : "link"}`}
        onClick={() => handleTabClick("tab1")}>Tab 1</button>
        <button  className={`${selectedTab === "tab2" ? "active-link" : "link"}`} 
         onClick={() => handleTabClick("tab2")}>Tab 2</button>
        <button  className={`${selectedTab === "tab3" ? "active-link" : "link"}`}
         onClick={() => handleTabClick("tab3")}>Tab 3</button>
      </div>
      {selectedTab === "tab1" && <div    className={`${selectedTab === "tab1" ? "active-link" : "link"}`}>Tab 1 Content</div>}
      {selectedTab === "tab2" && <div    className={`${selectedTab === "tab2" ? "active-link" : "link"}`}>Tab 2 Content</div>}
      {selectedTab === "tab3" && <div   className={`${selectedTab === "tab3" ? "active-link" : "link"}`}>Tab 3 Content</div>}
    </div>
  );
};

export default Tabs;
