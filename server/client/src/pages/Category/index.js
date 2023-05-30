import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { Empty } from "./../../components/Empty";
import { Heading } from "./../../components/global/Heading";
import { LatestCard } from "./../../components/LatestCard";
import { Loader } from "./../../components/global/Loader";
import {
  clearInfinitePostsAction,
  getInfinitePostsAction,
} from "./../../redux/actions/posts";
import { CategoryWrapper } from "./style";
import { toast } from "react-toastify";
import { SocialShare } from "./../../components/SocialShare";
import { Subscribe } from "./../../components/Subscribe";
import InfiniteScroll from "react-infinite-scroll-component";
export const Category = () => {
  const { categoryPosts, totalPosts, loading } = useSelector(
    (state) => state.infinitePosts
  );
  const [scrollPosts, setScrollPosts] = useState([]);
  const [pageNumber, setpageNumber] = useState(2);
  const [hasMore, setHasMore] = useState(true);
  const params = useParams();
  const dispatch = useDispatch();
  const param = params.slug.toLocaleLowerCase();

  const slug = param.split(" ").join("-");
  const fetchMore = () => {
    setTimeout(() => {
      if (totalPosts > categoryPosts?.length) {
        dispatch(getInfinitePostsAction(pageNumber, 2, slug));
      }
      if (categoryPosts.length === totalPosts || categoryPosts.length < 1) {
        setHasMore(false);
      }
      setpageNumber(pageNumber + 1);
    }, 1000);
  };
  useEffect(() => {
    dispatch(getInfinitePostsAction(1, 2, slug));
    return () => {
      dispatch(clearInfinitePostsAction());
    };
  }, [slug]);
  useEffect(() => {
    setScrollPosts(categoryPosts);
  }, [categoryPosts]);
  useEffect(() => {
    setHasMore(true);
  }, [slug]);
  console.log(categoryPosts);
  return (
    <CategoryWrapper className="pt-4 pb-5">
      <Container>
        <Row className="pb-4">
          <Col>
            <Heading>{param.split("-").join(" ")}</Heading>
          </Col>
        </Row>
        <Row>
          <>
            <Col sm={12} md={9}>
              {loading && !categoryPosts.length > 0 ? (
                <Loader color="#333" height="250" align="center" />
              ) : categoryPosts.length > 0 ? (
                <>
                  <InfiniteScroll
                    dataLength={scrollPosts?.length}
                    next={fetchMore}
                    hasMore={hasMore}
                    loader={<Loader text="Fetching More..." align="center" />}
                    endMessage={
                      <h2 className="end-message">
                        Huuuuurrrahhh You viewed all
                      </h2>
                    }
                  >
                    {scrollPosts?.map((item) => (
                      <Col sm={12} key={item._id} className="mb-5">
                        <LatestCard post={item} category={params.slug} />
                      </Col>
                    ))}
                  </InfiniteScroll>
                </>
              ) : (
                <Empty height={250} logo back justify="center" fontSize={18}>
                  Sorry! We don't found any post related to your query
                </Empty>
              )}
            </Col>
            <Col sm={12} md={3} className="d-none d-sm-block">
              <SocialShare />
              <Subscribe className="mt-4" />
            </Col>
          </>
        </Row>
      </Container>
    </CategoryWrapper>
  );
};
