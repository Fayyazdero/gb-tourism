import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Empty } from "../../components/Empty";
import { Heading } from "../../components/global/Heading";
import { Loader } from "../../components/global/Loader";
import { PostCard } from "../../components/PostCard";
import { PostRoundCard } from "../../components/PostRoundCard";
import { titleHelper } from "../../helpers";
import { WorldWrapper } from "./style";

export const World = ({
  posts: { adventure, lakes, famous_places, success_stories },
  loading,
}) => {
  return (
    <WorldWrapper>
      <Container className="py-4">
        <Row>
          <Col className="py-3">
            <Heading>Popular</Heading>
          </Col>
        </Row>
        {loading ? (
          <Loader align="center" height="410" />
        ) : !loading && adventure ? (
          <Row>
            <Col
              md={6}
              className="mb-0 mb-sm-4 mb-md-0"
              style={{ minHeight: "50vh" }}
            >
              <PostCard
                className="post-card-full"
                postId={adventure?._id ? adventure?._id : ""}
                title={titleHelper(
                  adventure?.title ? adventure?.title : "no title",
                  60
                )}
                username={adventure?.name ? adventure?.name : "no user"}
                time={adventure?.createdAt ? adventure?.createdAt : Date.now()}
                imageUrl={
                  adventure?.selectedFile ? adventure?.selectedFile : ""
                }
                category={
                  adventure?.categories ? adventure?.categories : "no category"
                }
                userId={adventure?.creator?._id ? adventure?.creator?._id : ""}
                full
              />
            </Col>
            <Col md={6} xl={3} style={{ minHeight: "60vh" }}>
              <Row style={{ height: "50%" }}>
                <Col className="mt-4 mt-sm-0">
                  <PostCard
                    full
                    className="post-card-full"
                    postId={lakes?._id ? lakes?._id : ""}
                    title={titleHelper(
                      lakes?.title ? lakes?.title : "no title",
                      30
                    )}
                    username={lakes?.name ? lakes?.name : "no user"}
                    time={lakes?.createdAt ? lakes?.createdAt : Date.now()}
                    imageUrl={lakes?.selectedFile ? lakes?.selectedFile : ""}
                    category={
                      lakes?.categories ? lakes?.categories : "no category"
                    }
                    userId={lakes?.creator?._id ? lakes?.creator?._id : ""}
                  />
                </Col>
              </Row>
              <Row style={{ height: "50%" }}>
                <Col className="mt-4">
                  <PostCard
                    full
                    className="post-card-full"
                    postId={famous_places?._id ? famous_places?._id : ""}
                    title={titleHelper(
                      famous_places?.title ? famous_places?.title : "no title",
                      30
                    )}
                    username={
                      famous_places?.name ? famous_places?.name : "no user"
                    }
                    time={
                      famous_places?.createdAt
                        ? famous_places?.createdAt
                        : Date.now()
                    }
                    imageUrl={
                      famous_places?.selectedFile
                        ? famous_places?.selectedFile
                        : ""
                    }
                    category={
                      famous_places?.categories
                        ? famous_places?.categories
                        : "no category"
                    }
                    userId={
                      famous_places?.creator?._id
                        ? famous_places?.creator?._id
                        : ""
                    }
                  />
                </Col>
              </Row>
            </Col>
            <Col md={12} xl={3} className="h-100 mt-4 mt-xl-0">
              <Row className="round-cards-outer">
                {success_stories?.length > 0 &&
                  success_stories?.map(
                    ({ _id, title, selectedFile, createdAt }, index) => (
                      <Col
                        md={6}
                        xl={12}
                        key={index}
                        className="round-card-wrapper"
                      >
                        <PostRoundCard
                          heading={titleHelper(title, 35)}
                          time={createdAt}
                          imgUrl={selectedFile}
                          postId={_id}
                        />
                      </Col>
                    )
                  )}
              </Row>
            </Col>
          </Row>
        ) : (
          <Empty height={500} justify="center" fontSize={20}>
            No posts found
          </Empty>
        )}
      </Container>
    </WorldWrapper>
  );
};
