import React from "react";
import {
  TabsWrapper,
  TabsHeader,
  TabHeaderItem,
  TabsBody,
  TabItem,
} from "./style";

const Tabs = ({ tabs, activeTab, handleTab }) => {
  return (
    <TabsWrapper className="mb-4">
      <TabsHeader className="tabs-header d-flex w-100">
        {tabs?.map((tab, index) => (
          <TabHeaderItem
            className={`${activeTab === index ? "active" : ""} me-4`}
            key={tab.name}
            onClick={() => handleTab(index)}
          >
            {tab.name}
          </TabHeaderItem>
        ))}
      </TabsHeader>
      <TabsBody className="d-flex w-100">
        {tabs?.map((tab, index) => {
          if (index === activeTab) {
            return (
              <TabItem className="w-100" key={index}>
                {tab.component}
              </TabItem>
            );
          }
        })}
      </TabsBody>
    </TabsWrapper>
  );
};

export default Tabs;
