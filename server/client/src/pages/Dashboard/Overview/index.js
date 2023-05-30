import React from "react";
import { Row, Col } from "reactstrap";
// import MyBarChart from "../../../components/Dashboard/Charts/BarChart";
import { OverviewCard } from "../../../components/dashboard/OverviewCard";
const data = [
  {
    title: "32,430",
    subTitle: "Total Users",
    status: "users",
  },
  {
    title: "32,430",
    subTitle: "Total Posts",
    status: "posts",
  },
  {
    title: "32,430",
    subTitle: "Published Posts",
    status: "published",
  },
  {
    title: "32,430",
    subTitle: "Panding Posts",
    status: "panding",
  },
];

export const Overview = () => {
  return (
    <>
      <Row>
        {data.map((item, index) => (
          <Col sm={12} md={3} key={index}>
            <OverviewCard
              status={item.status}
              title={item.title}
              subTitle={item.subTitle}
            />
          </Col>
        ))}
      </Row>
      <Row>
        <Col style={{ minHeight: "400px" }} className="mt-3">
          {/* <MyBarChart /> */}
        </Col>
      </Row>
    </>
  );
};
