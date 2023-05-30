import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { PostCard } from "../../components/PostCard";
import { titleHelper } from "../../helpers";
import { Loader } from "../../components/global/Loader";
import { Empty } from "../../components/Empty";

export const Hero = ({
  posts: { historic_places, lakes, adventure, success_stories },
  loading,
}) => {
  return (
    <>
      <Container>
        {loading ? (
          <Loader height="500" align="center" />
        ) : !loading && historic_places ? (
          <Row>
            <Col xs={12} sm={6} className="ps-0 pe-0 pe-sm-1 mb-0">
              <PostCard
                className="post-card-full"
                postId={historic_places?._id ? historic_places?._id : ""}
                title={titleHelper(
                  historic_places?.title ? historic_places?.title : "no title",
                  60
                )}
                username={
                  historic_places?.name ? historic_places?.name : "no user"
                }
                time={
                  historic_places?.createdAt
                    ? historic_places?.createdAt
                    : Date.now()
                }
                imageUrl={
                  historic_places?.selectedFile
                    ? historic_places?.selectedFile
                    : ""
                }
                category={
                  historic_places?.categories
                    ? historic_places?.categories
                    : "no category"
                }
                userId={
                  historic_places?.creator?._id
                    ? historic_places?.creator?._id
                    : ""
                }
                full
              />
            </Col>
            <Col xs={12} sm={6} className="">
              <Row>
                <Col xs={12} sm={12} className="mb-0 mb-sm-2 pe-0 ps-0 ps-sm-1">
                  <PostCard
                    className="post-card-full"
                    postId={lakes?._id ? lakes?._id : ""}
                    title={titleHelper(
                      lakes?.title ? lakes?.title : "no title",
                      60
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
              <Row>
                <Col
                  xs={12}
                  sm={12}
                  md={6}
                  className="pe-0 pe-xs-1 ps-0 ps-sm-1"
                >
                  <PostCard
                    className="post-card-full"
                    postId={adventure?._id ? adventure?._id : ""}
                    title={titleHelper(
                      adventure?.title ? adventure?.title : "no title",
                      60
                    )}
                    username={adventure?.name ? adventure?.name : "no user"}
                    time={
                      adventure?.createdAt ? adventure?.createdAt : Date.now()
                    }
                    imageUrl={
                      adventure?.selectedFile ? adventure?.selectedFile : ""
                    }
                    category={
                      adventure?.categories
                        ? adventure?.categories
                        : "no category"
                    }
                    userId={
                      adventure?.creator?._id ? adventure?.creator?._id : ""
                    }
                  />
                </Col>
                <Col
                  xs={12}
                  sm={12}
                  md={6}
                  className="ps-0 pe-0 ps-sm-1 d-block d-sm-none d-md-block"
                >
                  <PostCard
                    className="post-card-full"
                    postId={success_stories?._id ? success_stories?._id : ""}
                    title={titleHelper(
                      success_stories?.title
                        ? success_stories?.title
                        : "no title",
                      60
                    )}
                    username={
                      success_stories?.name ? success_stories?.name : "no user"
                    }
                    time={
                      success_stories?.createdAt
                        ? success_stories?.createdAt
                        : Date.now()
                    }
                    imageUrl={
                      success_stories?.selectedFile
                        ? success_stories?.selectedFile
                        : ""
                    }
                    category={
                      success_stories?.categories
                        ? success_stories?.categories
                        : "no category"
                    }
                    userId={
                      success_stories?.creator?._id
                        ? success_stories?.creator?._id
                        : ""
                    }
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        ) : (
          <Empty height={450} logo back justify="center" fontSize={18}>
            Sorry! No posts found
          </Empty>
        )}
      </Container>
    </>
  );
};
