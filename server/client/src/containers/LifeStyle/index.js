import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { Empty } from "../../components/Empty";
import { Heading } from "../../components/global/Heading";
import { LifeStyleCard } from "../../components/LifeStyleCard";
import { Loader } from "../../components/global/Loader";
import { LifeStyleWrapper } from "./style";

export const LifeStyle = ({ posts, loading }) => {
  return (
    <LifeStyleWrapper>
      <Container className="py-4 mb-0 mb-sm-4">
        <Row>
          <Col className="py-3">
            <Heading>Sports</Heading>
          </Col>
        </Row>
        {loading ? (
          <Row>
            <Col>
              <Loader align="center" height="250" />
            </Col>
          </Row>
        ) : posts.length > 0 ? (
          <Row className="mb-4">
            {posts?.map(
              ({ _id, selectedFile, title, categories, createdAt }) => (
                <Col md={3} className="margin-on-small" key={_id}>
                  <LifeStyleCard
                    imgUrl={selectedFile}
                    heading={title}
                    category={categories}
                    time={createdAt}
                    postId={_id}
                  />
                </Col>
              )
            )}
          </Row>
        ) : (
          <Empty height={250} justify="center" fontSize={20}>
            Sorry! No sports related posts found
          </Empty>
        )}
      </Container>
    </LifeStyleWrapper>
  );
};
