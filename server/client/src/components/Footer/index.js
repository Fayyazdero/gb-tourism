import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { handleCategoryPosts, titleHelper } from "../../helpers";
import { Loader } from "./../global/Loader";
import { toast } from "react-toastify";
import Logo from "./../../assets/logo.jpg";
import LightLogo from "./../../assets/light-logo-new.png";
import {
  FooterWrapper,
  Intro,
  ContactLink,
  Title,
  PostCard,
  Content,
  CopyWriteWrapper,
  CopyWriteWrapperInner,
  CopyWrite,
  CopyText,
} from "./style";
import { Empty } from "../Empty";
import { getPostsByCategoryFooterAction } from "../../redux/actions/posts";
import { getLengthOfCategoryPosts } from "../../network/api/post";

export const Footer = () => {
  const { theme: currentTheme } = useSelector((state) => state.theme);
  const { posts, loading } = useSelector((state) => state.footerCategoryPosts);
  const dispatch = useDispatch();
  const [lakesPosts, setLakesPosts] = useState([]);
  const [worldPosts, setWorldPosts] = useState([]);
  const [categoriesLength, setCategoriesLength] = useState({
    famous_places: 0,
    lakes: 0,
    success_stories: 0,
    adventure: 0,
  });
  useEffect(() => {
    dispatch(getPostsByCategoryFooterAction("lakes"));
    dispatch(getPostsByCategoryFooterAction("adventure"));
    getLengthOfCategoryPosts().then((res) => {
      setCategoriesLength(res.data);
    });
  }, []);
  useEffect(() => {
    setLakesPosts(
      posts?.filter((post) => post?.categories === "lakes").slice(0, 2)
    );
    setWorldPosts(
      posts?.filter((post) => post?.categories === "adventure").slice(0, 2)
    );
  }, [posts]);
  console.log(posts, "post");
  return (
    <FooterWrapper>
      <Container>
        <Row>
          <Col sm={12} md={6} lg={3}>
            <Link to="/">
              <img
                className="img-fluid logo"
                src={currentTheme === "dark" ? LightLogo : Logo}
              />
            </Link>
            <Intro>
              Trends is an amazing magazine Blogger theme that is easy to
              customize and change to fit your needs.
            </Intro>
            <ContactLink to="/" className="me-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-mail"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              storymug@gmail.com
            </ContactLink>
            <ContactLink to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-phone"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              +92222-000-0000
            </ContactLink>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <Title>LAKES</Title>
            {loading ? (
              <Loader background="none" height="100" align="start" />
            ) : lakesPosts?.length > 0 ? (
              <>
                {lakesPosts ? (
                  lakesPosts?.map((lake) => (
                    <PostCard to={`/posts/${lake?._id}`} key={lake._id}>
                      <img src={lake.selectedFile} className="img-fluid lake" />
                      <Content>{titleHelper(lake.title, 50)}</Content>
                    </PostCard>
                  ))
                ) : (
                  <div>Hello</div>
                )}
              </>
            ) : (
              <Empty color="white" size={30}>
                No posts found
              </Empty>
            )}
          </Col>
          <Col sm={12} md={6} lg={3}>
            <Title>ADVENTURE</Title>
            {loading ? (
              <Loader background="none" height="100" align="start" />
            ) : worldPosts?.length > 0 ? (
              <>
                {worldPosts &&
                  worldPosts?.map((cal) => (
                    <PostCard to={`/posts/${cal?._id}`} key={cal._id}>
                      <img
                        src={cal.selectedFile}
                        className="img-fluid calture"
                      />
                      <Content>{titleHelper(cal.title, 50)}</Content>
                    </PostCard>
                  ))}
              </>
            ) : (
              <Empty color="white" size={30}>
                No posts found
              </Empty>
            )}
          </Col>
          <Col sm={12} md={6} lg={3}>
            <Title>LABELS</Title>
            <ContactLink
              to="/categories/famous-places"
              className="d-flex justify-content-between"
            >
              Famous Places <span>({categoriesLength.famous_places})</span>
            </ContactLink>
            <ContactLink
              to="/categories/travel"
              className="d-flex justify-content-between"
            >
              Lakes <span>({categoriesLength.lakes})</span>
            </ContactLink>
            <ContactLink
              to="/categories/success-stories"
              className="d-flex justify-content-between"
            >
              Success Stories <span>({categoriesLength.success_stories})</span>
            </ContactLink>
            <ContactLink
              to="/categories/adventure"
              className="d-flex justify-content-between"
            >
              Adventure <span>({categoriesLength.adventure})</span>
            </ContactLink>
          </Col>
        </Row>
      </Container>
      <CopyWriteWrapper className="mt-5">
        <Container>
          <CopyWriteWrapperInner className="d-flex justify-content-between align-items-center pt-3">
            <CopyWrite>&copy; 2022 all rights reserved</CopyWrite>
            <CopyText>
              made with{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#f13934"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-heart"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>{" "}
              by Arshad Nawaz Baig & Fayaz Karim
            </CopyText>
          </CopyWriteWrapperInner>
        </Container>
      </CopyWriteWrapper>
    </FooterWrapper>
  );
};
