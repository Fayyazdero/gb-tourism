import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { Empty } from "../../../components/Empty";
import { Heading } from "../../../components/global/Heading";
import { Loader } from "../../../components/global/Loader";
import { LatestCard } from "../../../components/LatestCard";
import { getPostsBySearchAction } from "../../../redux/actions/posts";

const Search = () => {
  const { search } = useLocation();
  const dispatch = useDispatch();
  const { posts, loading } = useSelector((state) => state.search);
  let params = new URLSearchParams(search);
  let searchTerm = params.get("searchTerm");
  useEffect(() => {
    dispatch(getPostsBySearchAction(searchTerm));
  }, [searchTerm]);
  useEffect(() => {
    if (params.get("searchTerm") === null) {
      dispatch(getPostsBySearchAction(""));
    }
  }, []);
  return (
    <Container>
      <Row className="py-1">
        <Col className="pt-4">
          <Heading>{searchTerm ? searchTerm : "All Posts"}</Heading>
        </Col>
      </Row>
      <Row className="mb-5">
        {loading ? (
          <Col>
            <Loader align="center" height="300" />
          </Col>
        ) : posts?.length > 0 ? (
          posts?.map((post) => (
            <Col key={post._id} xs={12} sm={9} className="mt-3">
              <LatestCard post={post} category={post?.categories[0]} />
            </Col>
          ))
        ) : (
          <Empty height={250} logo back justify="center" fontSize={18}>
            Sorry! We don't found any post related to your query
          </Empty>
        )}
      </Row>
    </Container>
  );
};

export default Search;
