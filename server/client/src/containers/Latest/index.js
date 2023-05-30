import { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { Empty } from "../../components/Empty";
import { Heading } from "../../components/global/Heading";
import { LatestCard } from "../../components/LatestCard";
import { Loader } from "../../components/global/Loader";
import { SocialShare } from "../../components/SocialShare";
import { Subscribe } from "../../components/Subscribe";
import Ad from "../../assets/ad.jpg";
import { AdWrapper } from "./style";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";
import {
  clearInfinitePostsAction,
  getInfinitePostsAction,
} from "../../redux/actions/posts";
export const Latest = ({ loading }) => {
  const { posts, totalPosts } = useSelector((state) => state.infinitePosts);
  const dispatch = useDispatch();
  const [scrollPosts, setScrollPosts] = useState([]);
  const [pageNumber, setpageNumber] = useState(2);
  const [hasMore, setHasMore] = useState(true);
  const fetchMore = () => {
    setTimeout(() => {
      if (totalPosts > posts?.length) {
        dispatch(getInfinitePostsAction(pageNumber, 2));
      }
      if (posts.length === totalPosts || posts.length < 2) {
        setHasMore(false);
      }
      setpageNumber(pageNumber + 1);
    }, 1000);
  };
  useEffect(() => {
    dispatch(getInfinitePostsAction(1, 2));
    return () => {
      dispatch(clearInfinitePostsAction());
    };
  }, []);
  useEffect(() => {
    setScrollPosts(posts);
  }, [posts]);
  return (
    <>
      <Container className="py-4 pt-0 pt-sm-4">
        <Row>
          <Col className="py-3">
            <Heading>Latest</Heading>
          </Col>
          <div>
            {loading ? (
              <Row>
                <Col>
                  <Loader align="center" height="250" />
                </Col>
              </Row>
            ) : scrollPosts?.length > 0 ? (
              <Row>
                <Col sm={12} md={9}>
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
                      <Col md={12} className="mb-3" key={item._id}>
                        <LatestCard post={item} category={item.categories} />
                      </Col>
                    ))}
                  </InfiniteScroll>
                </Col>
                <Col className="py-3" sm={12} md={3}>
                  <AdWrapper className="d-none d-sm-block">
                    <img className="img-fluid" src={Ad} />
                    <SocialShare className="mt-3" />
                    <Subscribe className="mt-4" />
                  </AdWrapper>
                </Col>
              </Row>
            ) : (
              <Empty height={250} justify="center" fontSize={20}>
                No posts found
              </Empty>
            )}
          </div>
        </Row>
      </Container>
    </>
  );
};
