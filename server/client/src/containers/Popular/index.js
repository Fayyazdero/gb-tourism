import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { Empty } from "../../components/Empty";
import { Heading } from "../../components/global/Heading";
import { Loader } from "../../components/global/Loader";
import { PopularCard } from "../../components/PopularCard";
import { titleHelper } from "../../helpers";

export const Popular = ({ posts, loading }) => {
  const [popularPosts, setPopularPosts] = useState([]);
  const filterPopularPosts = async (posts) => {
    return setPopularPosts(posts && posts.slice(0, 4));
  };
  useEffect(() => {
    filterPopularPosts(posts);
  }, [posts]);

  console.log(popularPosts, "postss popular");
  return (
    <>
      <Container className="py-4">
        <Row>
          <Col className="py-3">
            <Heading>Latest News</Heading>
          </Col>
        </Row>
        {loading ? (
          <Row>
            <Col>
              <Loader align="center" height="250" />
            </Col>
          </Row>
        ) : posts.length > 0 ? (
          <Row>
            {popularPosts &&
              popularPosts.map((post, index) => (
                <Col md={3} className="mb-2" key={index}>
                  <PopularCard
                    imgUrl={post.selectedFile}
                    full
                    heading={titleHelper(post.title, 40)}
                    index={index}
                    postId={post._id}
                  />
                </Col>
              ))}
          </Row>
        ) : (
          <Empty height={250} justify="center" fontSize={20}>
            Sorry! No news related posts found
          </Empty>
        )}
      </Container>
    </>
  );
};
