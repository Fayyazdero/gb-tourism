import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { Empty } from "../../components/Empty";
import { Heading } from "../../components/Heading";
import { LatestCard } from "../../components/LatestCard";
import { Loader } from "../../components/Loader";
import { getPostsByCategoryAction } from "../../redux/actions/postActions";
import { CategoryWrapper } from "./style";
import { toast } from "react-toastify";
import { SocialShare } from "../../components/SocialShare";
import { Subscribe } from "../../components/Subscribe";

export const Category = () => {
  const { posts, loading, error } = useSelector((state) => state.categoryPosts);
  const params = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    const slug = params.slug.toLowerCase();
    dispatch(getPostsByCategoryAction(slug));
    error && toast.error(error, { position: toast.POSITION.TOP_RIGHT });
  }, [dispatch, params.slug]);
  return (
    <CategoryWrapper className="py-5">
      <Container>
        <Row className="pb-4">
          <Col>
            <Heading>{params.slug}</Heading>
          </Col>
        </Row>
        <Row>
          <>
            <Col sm={12} md={9}>
              {loading ? (
                <Loader color="#333" height="400px" align="center" />
              ) : posts && posts.length > 0 ? (
                <>
                  {posts &&
                    posts.map((post) => (
                      <Col sm={12} key={post.title} className="mb-5">
                        <LatestCard post={post} category={params.slug} />
                      </Col>
                    ))}
                </>
              ) : (
                <Empty height={400} logo back justify="center" fontSize={18}>
                  No posts found
                </Empty>
              )}
            </Col>
            <Col sm={12} md={3}>
              <SocialShare />
              <Subscribe className="mt-4" />
            </Col>
          </>
        </Row>
      </Container>
    </CategoryWrapper>
  );
};
