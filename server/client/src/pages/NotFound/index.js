import React from "react";
import { Col, Container, Row } from "reactstrap";
import { SubTitle, Title, Wrapper } from "./style";

const NotFound = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Wrapper className="text-center d-flex flex-column align-items-center justify-content-center h-100">
            <Title>Oops!</Title>
            <SubTitle>Sorry, Page is not available.</SubTitle>
          </Wrapper>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
